<template>
  <div class="layout">
    <sidebar></sidebar>
    <topbar></topbar>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sidebar from './components/sidebar'
import topbar from './components/topbar'

export default {
  components: {
    sidebar,
    topbar
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.layout{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  .main-container{
    position: absolute;
    top: 70px;
    bottom: 20px;
    left: 220px;
    right: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .1);
    border-radius: 6px;
    padding: 20px;
  }
}
</style>
