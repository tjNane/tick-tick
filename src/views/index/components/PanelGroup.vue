<template>
  <div>
    <el-row :gutter="40" class="panel-gruop">
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" v-for="(item, index) in panelList" :key="index">
        <div class="panel-item" @click="handleClick(item.title, item.endVal)">
          <div>
            <div class="item-title">{{item.title}}</div>
            <countTo :startVal='item.startVal' :endVal='item.endVal' :duration='2000' class="item-num"></countTo>
          </div>
          <i :class="['iconfont', item.icon]"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import countTo from 'vue-count-to'

export default {
  props: {
    panelList: {
      type: Array
    }
  },
  components: {
    countTo
  },
  methods: {
    handleClick (title, endVal) {
      this.$emit('click-panel-item', title, endVal)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-item {
  height: 100px;
  border-radius: 6px;
  padding: 0 20px;
  box-sizing: border-box;
  color: white;
  background-image: linear-gradient(-30deg, #a18cd1 0%, #fbc2eb 100%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .1);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  position: relative;
  top: 0;
  transition: .5s;
  cursor: pointer;
  &:hover{
    top: -4px;
  }
  .item-title{
    font-size: 14px;
  }
  .item-num{
    font-size: 30px;
  }
  .iconfont{
    font-size: 60px;
  }
}
</style>
