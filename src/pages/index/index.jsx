import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { bindActionCreators } from '../../utils/redux'
import * as ProjectActions from '../../actions/project';

import './index.less'

function mapDispatchToProps(dispatch) {
  return {
    projectActions: bindActionCreators(ProjectActions, dispatch)
  };
}

@connect(({ project }) => ({ project }), mapDispatchToProps)
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
  }

  loadProject = async (key) => {
    await this.props.projectActions.show(key);
    return this.props.project.ecode;
  }

  getRecentProjects = async () => {
    await this.props.projectActions.recents();
    return this.props.project.ecode;
  }

  async componentDidMount () {
    const ecode = await this.getRecentProjects();
    if (ecode !== 0) {
      Taro.navigateTo({ url: '/pages/login/index' });
    } else {
      const { project: { recents } } = this.props;
      if (recents.length > 0) {
        // save the current project
        Taro.setStorageSync('CurrentProject', recents[0]);
        // load the project detaill and permission
        await this.loadProject(recents[0].key);
        // switch the issue tab
        if (process.env.TARO_ENV === 'h5') {
          Taro.redirectTo({ url: '/pages/issue/index' });
        }
        setTimeout(() => { Taro.redirectTo({ url: '/pages/issue/index' }) }, 100);
      }
    }
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        ActionView
      </View>
    )
  }
}

export default Index
