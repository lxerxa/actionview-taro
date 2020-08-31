import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types';
import { View } from '@tarojs/components'
import { AtNoticebar, AtIcon } from 'taro-ui'

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
        <AtNoticebar>这是 NoticeBar 通告栏</AtNoticebar>
        <View className='action-view' onClick={ this.search }>
          <AtIcon value='search' size='22' color='#333'></AtIcon>
        </View>
      </View>
    )
  }
}
