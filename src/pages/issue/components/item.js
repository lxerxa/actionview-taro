import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';
import { AtTag, AtIcon } from "taro-ui"

import './item.less';

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object
  }

  static defaultProps = {
    item: null
  }

  render() {

    const { item } = this.props;

    if (!item) return <View />;

    return (
      <View className='issue-item-view'>
        <View className='title-view'>
          { item.no } - { item.title }
        </View>
        <View className='item-bottom'>
          <View className='item-bottom-item'>
            <View className='item-bottom-title'>
              <AtTag active size='small'>新功能</AtTag>
            </View>
          </View>
          <View className='item-bottom-item'>
            <View className='item-bottom-title'>
              <AtIcon value='user' size='small'/> 红中
            </View>
          </View>
          <View className='item-bottom-item'>
            <View className='item-bottom-title'>
              <AtTag active size='small'>开始</AtTag>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
