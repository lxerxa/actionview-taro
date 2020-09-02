import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';

import Index from './pages/index';
import Login from './pages/login';

import configStore from './store';

import './app.less';
import 'font-awesome/css/font-awesome.css';
import 'taro-ui/dist/style/index.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/login/index',
      'pages/issue/index',
      'pages/document/index',
      'pages/activity/index',
      'pages/kanban/index',
      'pages/me/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/issue/index',
        text: '问题',
        iconPath: './assets/tab-bar/list.png',
        selectedIconPath: './assets/tab-bar/list-active.png'
      }, {
        pagePath: 'pages/kanban/index',
        text: '看板',
        iconPath: './assets/tab-bar/kanban.png',
        selectedIconPath: './assets/tab-bar/kanban-active.png'
      }, {
        pagePath: 'pages/activity/index',
        text: '活动',
        iconPath: './assets/tab-bar/play.png',
        selectedIconPath: './assets/tab-bar/play-active.png'
      }, {
        pagePath: 'pages/document/index',
        text: '文档',
        iconPath: './assets/tab-bar/file.png',
        selectedIconPath: './assets/tab-bar/file-active.png'
      }, {
        pagePath: 'pages/me/index',
        text: '我',
        iconPath: './assets/tab-bar/user.png',
        selectedIconPath: './assets/tab-bar/user-active.png'
      }],
      color: '#8a8a8a',
      selectedColor: '#2d8cf0',
      backgroundColor: '#ffffff',
      borderStyle: 'white'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
