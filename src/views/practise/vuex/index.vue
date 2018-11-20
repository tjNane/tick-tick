<template>
  <div>
    <title-panel name="state"></title-panel>
    <div>
      <h4>{{$store.state.count}} {{count}}</h4>
      <button class="practise-btn mr20" @click="$store.commit('reduce')">-</button>
      <button class="practise-btn" @click="$store.commit('add')">+</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  /** 
   * 获取state的几种写法
   * 1、$store.state.count
   * 2、计算属性
   * 3、mapState
   */
  computed: {
    // count () {
    //   return this.$store.state.count
    // },
    ...mapState (['count'])
  }
}
</script>

<style lang="scss" scoped>
</style>
