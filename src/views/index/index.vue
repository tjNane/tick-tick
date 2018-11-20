<template>
  <div>
    <img class="welcome-img" :src="require('@/assets/images/welcome.png')" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome-img{
  display: block;
  margin: 80px auto;
  width: 300px;
}
</style>
