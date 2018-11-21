<template>
  <div class="topbar">
    <div>
      <div class="left-area">
        <div class="btn"><i class="iconfont t-menu"></i></div>
        <el-breadcrumb separator="/" class="ml20">
          <el-breadcrumb-item v-for="(item, index) in breadItems" :key="index" class="breadcrumbsss">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="right-btns">
        <el-tooltip effect="dark" content="主页" placement="bottom">
          <div class="btn" @click="$router.push('/')"><i class="iconfont t-home"></i></div>
        </el-tooltip>
        <div class="btn"><i class="iconfont t-onoff"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      breadItems: []
    }
  },
  watch: {
    // 监听路由的变化动态生成面包屑
    $route: {
      handler (val) {
        const breadItems = []
        for (const item of val.matched) {
          if (item.path !== '/index') {
            breadItems.push(item.meta.title)
          }
        }
        this.breadItems = breadItems
      },
      // 默认要执行一次
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.topbar{
  position: absolute;
  left: 200px;
  right: 0;
  top: 0;
  z-index: 10;
  height: 70px;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  &>div{
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background: white;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    .btn{
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border-radius: 6px;
      transition: .3s;
      color: $primary-color;
      cursor: pointer;
    }
    .left-area{
      display: flex;
      align-items: center;
    }
    .right-btns{
      display: flex;
      .iconfont{
        font-size: 20px;
      }
    }
  }
}
</style>
