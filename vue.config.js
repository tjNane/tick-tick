module.exports = {
  outputDir: 'dist',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/variable.scss";`
      }
    }
  }
}
