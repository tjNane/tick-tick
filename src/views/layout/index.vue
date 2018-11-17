<template>
  <div class="layout">
    <sidebar></sidebar>
    <topbar></topbar>
    <div class="main-container">
      <transition name="main">
        <router-view></router-view>
      </transition>
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
    overflow-y: scroll;
    &::-webkit-scrollbar{
      width: 4px;
      height: 4px;
      background-color: #fff;
    }
    &::-webkit-scrollbar-track{
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb{
      border-radius: 2px;
      background-color: $primary-color;
    }
  }
}
</style>
