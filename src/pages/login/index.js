import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { AtInput, AtButton } from 'taro-ui';
import { connect } from '@tarojs/redux';
import { base64_encode } from '@/utils/utils';
import { bindActionCreators } from '@/utils/redux';

import './index.less';

import * as UserActions from '@/actions/user';
import * as ProjectActions from '@/actions/project';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch),
    projectActions: bindActionCreators(ProjectActions, dispatch)
  };
}

@connect(({ user, project }) => ({ user, project }), mapDispatchToProps)
class Login extends Component {

  config = {
    navigationBarTitleText: 'Login',
    navigationBarBackgroundColor: '#2d8cf0',
    navigationBarTextStyle: 'white'
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '', 
      password: '' 
    };
    this.login = this.login.bind(this);
  }

  login = async (values) => {
    await this.props.actions.login(values);
    return this.props.user.ecode;
  }

  getRecentProjects = async () => {
    await this.props.projectActions.recents();
    return this.props.project.ecode;
  }

  loadProject = async (key) => {
    await this.props.projectActions.show(key);
    return this.props.project.ecode;
  }

  async userLogin() {
    const { email, password } = this.state;

    if (email.length === 0) {
      Taro.showToast({
        title: 'Please input email',
        icon: 'none'
      });
    } else if (password.length === 0) {
      Taro.showToast({
        title: 'Please input password',
        icon: 'none'
      });
    } else {
      const ecode = await this.login({ email, password });
      if (ecode === 0) {
        const { user: { item } } = this.props;
        const authorization = 'Basic ' + base64_encode(item.email + ':' + password);
        Taro.setStorageSync('Authorization', authorization);

        // 获取最近访问项目列表
        await this.getRecentProjects();
        const { project: { recents } } = this.props;
        if (recents.length > 0) {
          // save the current project
          Taro.setStorageSync('CurrentProject', recents[0]);
          // load the project detaill and permission
          await this.loadProject(recents[0].key);
          // switch the issue tab
          if (process.env.TARO_ENV === 'h5') {
            Taro.redirectTo({ url: '/pages/issue/index' })
          }
          setTimeout(() => { Taro.redirectTo({ url: '/pages/issue/index' }) }, 100);
        }
      } else {
        Taro.setStorageSync('Authorization', '');
        Taro.showToast({
          title: 'Please input password',
          icon: 'none'
        });
      }
    }
  }

  render() {
    return (
      <View className='login_content'>
        <View className='input_view'>
          <AtInput
            name='email'
            title='用户名:'
            type='text'
            placeholder='请输入用户名'
            value={ this.state.email }
            onChange={ (value) => { this.setState({ email: value }) } } />
          <AtInput
            name='password'
            title='密码:'
            type='password'
            placeholder='请输入密码'
            value={ this.state.password }
            onChange={ (value) => { this.setState({ password: value }) } } />
        </View>
        <View className='login_button' onClick={ this.userLogin.bind(this) }>
          登录 
        </View>
      </View>
    );
  }
}

export default Login;
