<template>
  <div>
    <app-table
      :promise="tableList"
      showSelection
      :default-sort="{prop: 'date'}">
      <el-table-column prop="date" label="日期" sortable></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="card" label="身份证"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
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
  }
}
</script>
