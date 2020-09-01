import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';
import { AtTag, AtIcon } from "taro-ui"

import './item.less';

export default class Item extends Component {
  static propTypes = {
    options: PropTypes.object,
    item: PropTypes.object
  }

  static defaultProps = {
    item: null
  }

  render() {

    const { options, item } = this.props;

    if (!item) return <View />;

    let typeName = '';
    if (options.types) {
      const ti = options.types.findIndex((v) => v.id == item.type);
      if (ti >= 0) {
        typeName = options.types[ti].name;
      }
    }

    let stateName = '';
    let stateCategory = '';
    if (options.states) {
      const si = options.states.findIndex((v) => v.id == item.state);
      if (si >= 0) {
        stateName = options.states[si].name;
        stateCategory = options.states[si].category;
      }
    }

    return (
      <View className='issue-item-view'>
        <View className='title-view'>
          { item.no } - { item.title }
        </View>
        <View className='item-bottom'>
          <View className='item-bottom-item'>
            <View className='item-bottom-title'>
              <AtTag active size='small' className='type-label'>{ typeName }</AtTag>
            </View>
          </View>
          <View className='item-bottom-item'>
            <View className='item-bottom-title'>
              <AtIcon value='user' size='small'/> { item.assignee && item.assignee.name || '' } 
            </View>
          </View>
          <View className='item-bottom-item'>
            <View className='item-bottom-title'>
              <AtTag active size='small' className={ 'state-' + stateCategory + '-label' }>{ stateName }</AtTag>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
