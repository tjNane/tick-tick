<template>
  <div>
    <app-table
      :promise="tableList"
      showSelection>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="tel" label="电话"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </app-table>
  </div>
</template>

<script>
import { tableData } from '@/api/table'

export default {
  data () {
    return {
      tableList: tableData
    }
  },
  mounted () {
  }
  // methods: {
  //   // 获取表格数据
  //   getTableData () {
  //     this.$http(tableData(), res => {
  //       this.tableData = res.data
  //     })
  //   }
  // }
}
</script>
