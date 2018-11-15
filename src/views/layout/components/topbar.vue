<template>
  <div class="topbar">
    <div>
      <div class="menu-btn"><i class="iconfont t-caidan"></i></div>
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
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, .1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    .menu-btn{
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border-radius: 6px;
      transition: .3s;
      color: $primary-color;
      cursor: pointer;
      border: 1px solid transparent;
      &:hover{
        border: 1px solid #eee;
      }
    }
  }
}
</style>
