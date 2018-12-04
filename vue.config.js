module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/variable.scss";`
      }
    }
  },
  devServer: {
    host: 'localhost',
    port: 8700
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.com',
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
}
