<template>
  <div class="error-wrap">
    <img class="img-404" :src="require('@/assets/images/404.jpg')" alt="">
  </div>
</template>

<style lang="scss" scoped>
.error-wrap{
  position: relative;
  width: 100vw;
  height: 100vh;
  background: white;
  .img-404 {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: floatage 1.5s ease-in-out infinite;
  }
}
@keyframes floatage {
  0% { top: 0 }
  50% { top: -20px }
  100% { top: 0 }
}
</style>
