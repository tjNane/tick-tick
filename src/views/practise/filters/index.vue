<template>
  <div>
    <div class="filter-item">
      <title-panel name="demo1(字符串转大写)"></title-panel>
      <p><span>过滤前</span>{{msg}}</p>
      <p><span>过滤后</span>{{ msg | stringToUpper }}</p>
    </div>
    <div class="filter-item">
      <title-panel name="demo2(超过最大长度显示省略号)"></title-panel>
      <p><span>过滤前</span>{{msg}}</p>
      <p><span>过滤后</span>{{ msg | addEllipsis(10) }}</p>
    </div>
    <div class="filter-item">
      <title-panel name="demo3(格式化日期)"></title-panel>
      <p><span>过滤前</span>{{formattingDate}}</p>
      <p><span>过滤后</span>{{ formattingDate | formatDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    // 转大写
    stringToUpper (value) {
      if (!value) return 'nullString'
      return value.toUpperCase()
    },
    // 超出长度添加省略号
    addEllipsis (value, max) {
      if (!value) return ''
      if (value.length <= max) return value
      return value.slice(0, max) + '...'
    },
    // 格式化日期
    formatDate (value) {
      if (!value) return ''
      const oneHour = 3600 * 1000
      const hours = Math.ceil((Date.now() - new Date(value)) / oneHour)
      if (hours >= 24) {
        return value.slice(0, 10)
      } else {
        return `${hours}小时前`
      }
    }
  },
  data () {
    return {
      msg: 'Vue.js allows you to customize filters that can be used for some common text formatting',
      formattingDate: '2018-11-19 17:22:37'
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-item span{
  background: $primary-color;
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
  margin-right: 10px;
}
</style>
