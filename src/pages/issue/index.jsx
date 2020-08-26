import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import qs from 'qs';

import { bindActionCreators } from '@/utils/redux'
import * as IssueActions from '@/actions/issue';

import List from './components/list';

import './index.less'

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(IssueActions, dispatch)
  };
}

@connect(({ issue }) => ({ issue }), mapDispatchToProps)
class Index extends Component {

  constructor(props) {
    super(props);
    const currentProject = Taro.getStorageSync('CurrentProject');
    this.pid = currentProject.key;
  }

  config = {
    navigationBarTitleText: '首页'
  }

  index = async (query) => {
    query = query || {};
    if (!query.page) { query.page = 1; }
    await this.props.actions.index(this.pid, qs.stringify(query));
    return this.props.issue.ecode;
  }

  create = async (values) => {
    await this.props.actions.create(this.pid, values);
    return this.props.issue.ecode;
  }

  show = async (id) => {
    await this.props.actions.show(this.pid, id);
    return this.props.issue.ecode;
  }

  loadOptions = async () => {
    await this.props.actions.getOptions(this.pid);
    return this.props.issue.ecode;
  }

  edit = async (id, values) => {
    await this.props.actions.edit(this.pid, id, values);
    return this.props.issue.ecode;
  }

  del = async (id) => {
    const { actions } = this.props;
    await actions.del(this.pid, id);
    return this.props.issue.ecode;
  }

  componentWillReceiveProps (nextProps) {
  }

  componentDidMount () { 
    this.loadOptions();
    this.index();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { issue: { collection } } = this.props;

    return (
      <View className='index'>
        <List collection={ collection }/> 
      </View>
    )
  }
}

export default Index
