const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        security: resolve(__dirname, 'security/index.html'),
        quality: resolve(__dirname, 'quality/index.html'),
          badexample: resolve(__dirname, 'badexample/index.html')

      }
    }
  }
}
