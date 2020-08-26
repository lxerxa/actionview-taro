import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { bindActionCreators } from '../../utils/redux'
import * as CounterActions from '../../actions/counter';

import './index.less'

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  };
}

@connect(({ counter }) => ({ counter }), mapDispatchToProps)
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  async test() {
    await this.props.actions.test();
    return this.props.counter.ecode;
  }

  componentWillReceiveProps (nextProps) {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log(this.props.counter);
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.actions.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.actions.minus}>-</Button>
        <Button className='dec_btn' onClick={this.props.actions.test}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Index
