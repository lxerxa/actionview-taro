import Taro from '@tarojs/taro'

class ApiClient {

  constructor() {
    this.baseURL = '/api';
  }

  getConfig(config) {
    config.url = this.baseURL + config.url;
    config.method = config.method || 'get';
    config.header = { 
      'content-type': 'application/json',
      'Authorization': Taro.getStorageSync('Authorization') || ''
    };
    return config;
  }

  async request(config = {}) {
    try {
      const { data } = await Taro.request(this.getConfig(config));
      return data;
    } catch (error) {
      throw error && error.data || error.stack;
    }
  }
}

export default ApiClient;
