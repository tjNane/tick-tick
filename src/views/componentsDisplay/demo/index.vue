<template>
  <div>
    <el-table
      :data="tableList"
      showSelection
      :default-sort = "{prop: 'monthOrder', order: 'descending'}">
      <el-table-column prop="name" label="姓名" ></el-table-column>
      <el-table-column prop="contribute" label="贡献值" sortable></el-table-column>
      <el-table-column prop="dayOrder" label="日订单" sortable></el-table-column>
      <el-table-column prop="weekOrder" label="周订单" sortable></el-table-column>
      <el-table-column prop="monthOrder" label="月订单" sortable></el-table-column>
    </el-table>

    <div class="news-wrap">
      <i class="iconfont t-voice"></i>
      <div class="news-list" :style="{'top': -scrollTimes * 40 + 'px'}" :class="{trans: scrollTimes}">
        <div class="news-list-item" v-for="(item, index) in tableList" :key="index">{{item.name + item.monthOrder}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableList: [
        { name: '张三', contribute: 3000, dayOrder: 234, weekOrder: 24423, monthOrder: 123213 },
        { name: '张三', contribute: 3000, dayOrder: 234, weekOrder: 24423, monthOrder: 123213 }
      ],
      scrollTimes: 0
    }
  },
  created () {
    // this.scrollNews()
  },
  methods: {
    scrollNews () {
      if (this.tableList.length > 1) {
        this.tableList.push(this.tableList[0])
        const newsLength = this.tableList.length
        setInterval(() => {
          if (this.scrollTimes < newsLength - 1) {
            this.scrollTimes++
          } else {
            this.scrollTimes = 0
          }
        }, 3000)
      }
    }
  }
}
</script>

<style scoped>
  .news-wrap {
    height: 40px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  .news-wrap .iconfont {
    font-size: 20px;
    color: red;
  }
  .news-wrap .news-list {
    position: absolute;
    top: 0;
    left: 30px;
    box-sizing: border-box;
  }
  .news-list .trans {
    transition: .5s;
  }
  .news-wrap .news-list .news-list-item {
    height: 40px;
    line-height: 40px;
  }
</style>
