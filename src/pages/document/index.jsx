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
    navigationBarTitleText: '文档'
  }

  componentWillReceiveProps (nextProps) {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='document-index'>
        文档 
      </View>
    )
  }
}

export default Index
