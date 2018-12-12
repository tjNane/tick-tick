<template>
  <div :class="className" :style="{ width, height }"></div>
</template>

<script>
import { debounce } from '@/utils/index'
import echarts from 'echarts'
require('echarts/theme/infographic') // echarts主题

export default {
  data () {
    return {
      chart: null
    }
  },
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler (val) {
        this.setOptions(val)
      }
    }
  },
  mounted () {
    this.initChart()
    if (this.autoResize) {
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHandler)
    }
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.__resizeHandler)
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    setOptions ({ manData, womanData, shemaleData } = {}) {
      this.chart.setOption({
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['男', '女', '中性']
        },
        series: [{
          name: '男',
          itemStyle: {
            normal: {
              color: '#409EFF',
              lineStyle: {
                color: '#409EFF',
                width: 2
              }
            }
          },
          smooth: true,
          type: 'line',
          data: manData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: '女',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#FE7CDE',
              lineStyle: {
                color: '#FE7CDE',
                width: 2
              },
              areaStyle: {
                color: '#f3f8ff'
              }
            }
          },
          data: womanData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        },
        {
          name: '中性',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#F4A361',
              lineStyle: {
                color: '#F4A361',
                width: 2
              }
            }
          },
          data: shemaleData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }]
      })
    },
    initChart () {
      this.chart = echarts.init(this.$el, 'infographic')
      this.setOptions(this.chartData)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
