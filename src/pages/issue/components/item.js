import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';
import { AtCard } from "taro-ui"

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
      <AtCard
        title='这是个标题'
      >
        这也是内容区 可以随意定义功能
      </AtCard>
    )
  }
}
