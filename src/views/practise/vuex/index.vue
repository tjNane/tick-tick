<template>
  <div>
    <title-panel name="vuex"></title-panel>
    <div>
      <h4>{{$store.state.count}} {{count}}</h4>
      <button class="practise-btn mr20" @click="reduce">-</button>
      <button class="practise-btn" @click="$store.commit('add', 10)">+</button>
      <button class="practise-btn" @click="addActions">+</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
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
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addActions'])
  }
}
</script>

<style lang="scss" scoped>
</style>
