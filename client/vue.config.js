const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/api': {
        // target: 'https://chatroom-sml.herokuapp.com/'
        // target: 'http://localhost:3000'
      }
    },
  }
}