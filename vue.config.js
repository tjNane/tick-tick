module.exports = {
  baseUrl: '/tick-web/',
  outputDir: 'dist',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/variable.scss";`
      }
    }
  }
}
