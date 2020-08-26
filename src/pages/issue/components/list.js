import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';

import Item from './item';

import './list.less';

export default class List extends Component {
  static propTypes = {
    collection: PropTypes.array
  }

  static defaultProps = {
    collection: null
  }

  handleClicked = (item) => {
    //Taro.navigateTo({
    //  url: '/pages/repo/issueDetail?url=' + item.url
    //})
  }

  render() {
    const { collection } = this.props;

    if (!collection) return <View />;

    return (
      <View className='content'>
        {
          collection.map((item, index) => {
            return (
              <View onClick={ this.handleClicked(item) } key={ index }>
                <Item item={ item } />
              </View>
            )
          })
        }
      </View>
    )
  }
}
