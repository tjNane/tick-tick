<template>
  <div ref="appTable" class="app-table">
    <el-table
      ref="elTable"
      :data="listData"
      :height="height"
      :max-height="maxHeight"
      :border="border"
      :stripe="stripe"
      :size="size"
      :fit="fit"
      :show-header="showHeader"
      :highlight-current-row="highlightCurrentRow"
      :current-row-key="currentRowKey"
      :row-class-name="rowClassName"
      :row-style="rowStyle"
      :row-key="rowKey"
      :empty-text="emptyText"
      :default-expand-all="defaultExpandAll"
      :expand-row-keys="expandRowKeys"
      :default-sort="defaultSort"
      :tooltip-effect="tooltipEffect"
      :show-summary="showSummary"
      :sum-text="sumText"
      :summary-method="summaryMethod"
      v-loading="listLoading"
      element-loading-text="给我一点时间"
      style="width:100%;">
      <!-- @selection-change="selectionChange"
      @select="select"
      @select-all="selectAll"
      @cell-mouse-enter="cellMouseEnter"
      @cell-mouse-leave="cellMouseLeave"
      @cell-click="cellClick"
      @cell-dblclick="cellDblclick"
      @row-click="rowClick"
      @row-contextmenu="rowContextmenu"
      @row-dblclick="rowDblclick"
      @header-click="headerClick"
      @sort-change="sortChange"
      @filter-change="filterChange"
      @current-change="currentChange"
      @header-dragend="headerDragend"
      @expand="expand"> -->
      <el-table-column type="selection" v-if="showSelection">
      </el-table-column>
      <slot></slot>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'AppTable',
  data () {
    return {
      // 数据总数
      total: 0,
      // 数据集合
      listData: [],
      // 是否正在加载中
      listLoading: true,
      // 查询表单
      queryForm: {}
    }
  },
  props: {
    // 额外的查询参数
    params: {
      type: Object,
      default: function () {
        return {}
      }
    },
    // 用来获取promise方法的数据
    promise: {
      type: Function
    },
    // 是否显示左边的选择框
    showSelection: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array
    },
    // 是否显示斑马纹
    stripe: {
      type: Boolean,
      default: true
    },
    // 表格高度，用于固定表头
    height: {
      type: ['String', 'Number']
    },
    // 表格流体高度
    maxHeight: ['String', 'Number'],
    // 是否带有纵向边框
    border: {
      type: Boolean,
      default: false
    },
    // 表格的尺寸 medium / small / mini
    size: {
      type: String
    },
    // 列的宽度是否自撑开
    fit: {
      type: Boolean,
      dafault: true
    },
    // 是否显示表头
    showHeader: {
      type: Boolean,
      default: true
    },
    // 是否要高亮当前行
    highlightCurrentRow: {
      type: Boolean,
      default: false
    },
    // 当前行的 key，只写属性
    currentRowKey: {
      type: [String, Number]
    },
    rowClassName: {
      type: [Function, String]
    },
    rowStyle: {
      type: [Function, Object]
    },
    rowKey: {
      type: [Function, String]
    },
    emptyText: {
      type: String,
      default: '暂无数据'
    },
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    expandRowKeys: {
      type: Array
    },
    defaultSort: {
      type: Object
    },
    tooltipEffect: {
      type: String
    },
    showSummary: {
      type: Boolean,
      default: false
    },
    sumText: {
      type: String,
      default: '合计'
    },
    summaryMethod: {
      type: Function
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    // 请求接口获取数据
    fetchData () {
      if (!this.promise) return
      this.promise(Object.assign({}, this.queryForm, this.params)).then(res => {
        if (res.code === 200 && res.data) {
          this.listData = []
          if (res.data.length) {
            this.listData = res.data
            // this.total = +res.n
          }
        } else {
          this.$message.error('获取数据失败')
        }
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.listLoading = false
      })
    },
    select (selection, row) {
      this.$emit('select', selection, row)
    },
    selectAll (selection) {
      this.$emit('select-all', selection)
    },
    selectionChange (selection) {
      // console.log(selection)
      this.$emit('selection-change', selection)
    },
    cellMouseEnter (row, column, cell, event) {
      this.$emit('cell-mouse-enter', row, column, cell, event)
    },
    cellMouseLeave (row, column, cell, event) {
      this.$emit('cell-mouse-leave', row, column, cell, event)
    },
    cellClick (row, column, cell, event) {
      this.$emit('cell-click', row, column, cell, event)
    },
    cellDblclick (row, column, cell, event) {
      this.$emit('cell-dblclick', row, column, cell, event)
    },
    rowClick (row, event, column) {
      this.$emit('row-click', row, event, column)
    },
    rowContextmenu (row, event) {
      this.$emit('row-contextmenu', row, event)
    },
    rowDblclick (row, event) {
      this.$emit('row-dblclick', row, event)
    },
    headerClick (column, event) {
      this.$emit('header-click', column, event)
    },
    sortChange ({ column, prop, order }) {
      this.$emit('sort-change', { column, prop, order })
    },
    filterChange (filters) {
      this.$emit('filter-change', filters)
    },
    currentChange (currentRow, oldCurrentRow) {
      this.$emit('current-change', currentRow, oldCurrentRow)
    },
    headerDragend (newWidth, oldWidth, column, event) {
      this.$emit('header-dragend', newWidth, oldWidth, column, event)
    },
    expand (row, expanded) {
      this.$emit('expand', row, expanded)
    }
  }
}
</script>
