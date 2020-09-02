import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types';
import { View } from '@tarojs/components'
import { AtNoticebar, AtIcon } from 'taro-ui'

import './segment.less'

export default class Segment extends Component {

  static propTypes = {
    total: PropTypes.number,
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
    const { total } = this.props;

    return (
      <View className='issue-segment'>
        <AtNoticebar className='notice'>共有问题 { total || '' } 个。</AtNoticebar>
        <View className='operate-view'>
          <View className='action-view' onClick={ this.search }>
            <AtIcon value='add' size='22' color='#333'></AtIcon>
          </View>
          <View className='action-view' onClick={ this.search }>
            <AtIcon value='search' size='22' color='#333'></AtIcon>
          </View>
        </View>
      </View>
    )
  }
}
