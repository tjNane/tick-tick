<template>
  <div>
    <panel-group :panel-list="panelList" @click-panel-item="clickPanelItem" class="panel"></panel-group>
    <line-chart :chart-data="lineChartData"/>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineCharts'

export default {
  components: {
    PanelGroup,
    LineChart
  },
  data () {
    return {
      // 顶部卡片
      panelList: [
        { id: 1, title: 'Tyrande', startVal: 0, endVal: 1332, icon: 't-manage' },
        { id: 2, title: 'Teresa', startVal: 20, endVal: 2352, icon: 't-integral' },
        { id: 3, title: 'Mogget', startVal: 35, endVal: 8000, icon: 't-picture' },
        { id: 4, title: 'Rushton', startVal: 55, endVal: 6534, icon: 't-decoration' }
      ],
      // 折线图数据
      lineChartData: {
        manData: [100, 120, 161, 134, 105, 160, 165],
        womanData: [120, 82, 91, 154, 162, 140, 145],
        shemaleData: [0, 10, 20, 30, 40, 80, 150]
      }
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
.panel{
  margin-bottom: 40px;
}
</style>
