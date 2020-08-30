import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';

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
      <View className='issue_item'>
        <View className='title_view'>
          { item.title }
        </View>
      </View>
    )
  }
}
