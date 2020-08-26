const HOST = '"https://actionview.cn:8080"'

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    devServer: {
      proxy: {
        '/api/': {
          target: 'http://actionview.cn:8080/actionview/',
          changeOrigin: true
        },
      }
    }
  }
}
