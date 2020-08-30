import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types';
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import './segment.less'

export default class Segment extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  componentWillMount() {
  }

  switchProject = () => {
    console.log('aabb');
  }

  search = () => {
    console.log('aabb');
  }

  render() {
    const {  } = this.props;

    return (
      <View className='segment'>
        <View className='action-view' onClick={ this.switchProject }>
          <AtIcon prefixClass='fa' value='bars' size='22' color='#333'></AtIcon>
        </View>
        <View className='action-view' onClick={ this.search }>
          <AtIcon prefixClass='fa' value='search' size='22' color='#333'></AtIcon>
        </View>
      </View>
    )
  }
}
