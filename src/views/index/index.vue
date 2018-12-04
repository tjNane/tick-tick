<template>
  <div>
    <panel-group :panel-list="panelList" @click-panel-item="clickPanelItem"></panel-group>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'

export default {
  components: {
    PanelGroup
  },
  data () {
    return {
      // 顶部卡片
      panelList: [
        { id: 1, title: 'Tyrande', startVal: 0, endVal: 1332, icon: 't-manage' },
        { id: 2, title: 'Teresa', startVal: 20, endVal: 2352, icon: 't-integral' },
        { id: 3, title: 'Mogget', startVal: 35, endVal: 8000, icon: 't-picture' },
        { id: 4, title: 'Rushton', startVal: 55, endVal: 6534, icon: 't-decoration' }
      ]
    }
  },
  methods: {
    // 顶部卡片点击
    clickPanelItem (title, endVal) {
      this.$message.success(`${title} - ${endVal}`)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
