<template>
  <div class="topbar">
    <div>
      <div class="btn"><i class="iconfont t-menu"></i></div>
      <div class="right-btns">
        <div class="btn" @click="$router.push('/')"><i class="iconfont t-home"></i></div>
        <div class="btn"><i class="iconfont t-onoff"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .1);
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
      position: relative;
      top: 0;
      &:hover{
        top: -2px;
      }
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
