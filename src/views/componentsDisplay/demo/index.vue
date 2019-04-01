<template>
  <div>
    <el-table :data='tableData4' :span-method='objectSpanMethod' border>
      <el-table-column prop='id' label='id' width='180'></el-table-column>
      <el-table-column prop='name' label='name'></el-table-column>
      <el-table-column prop='amount1' label='amount1'></el-table-column>
      <el-table-column prop='amount2' label='amount2'></el-table-column>
      <el-table-column prop='amount3' label='amount3'></el-table-column>
      <el-table-column prop='amount4' label='amount4'></el-table-column>
      <el-table-column prop='amount5' label='amount5'></el-table-column>
      <el-table-column prop='amount6' label='amount6'></el-table-column>
      <el-table-column prop='amount7' label='amount7'></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      spanArr: [],
      tableData4: [
        {
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        },
        {
          id: '12987122',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        },
        {
          id: '你好',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        },
        {
          id: '你好',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        },
        {
          id: '你好',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        },
        {
          id: '你',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        },
        {
          id: '你',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        },
        {
          id: '你',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        },
        {
          id: '他',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }
      ],
      formLabelWidth: '90px'
    }
  },
  mounted: function () {
    let contactDot = 0
    this.tableData4.forEach((item, index) => {
      item.index = index
      if (index === 0) {
        this.spanArr.push(1)
      } else {
        if (item.id === this.tableData4[index - 1].id) {
          this.spanArr[contactDot] += 1
          this.spanArr.push(0)
        } else {
          this.spanArr.push(1)
          contactDot = index
        }
      }
    })
      console.log(this.spanArr)
  },
  methods: {
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        const _row = this.spanArr[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
      if (columnIndex === 1) {
        const _row = this.spanArr[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
