<template>
  <div class="sidebar">
    <div class="user-info">
      <div>
        <img src="../../../assets/images/user-img.jpg" alt="">
        <div>spirytus</div>
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
.sidebar{
  width: 200px;
  height: 100%;
  background: $primary-color;
  .user-info{
    height: 150px;
    padding: 10px;
    box-sizing: border-box;
    &>div{
      width: 100%;
      height: 100%;
      box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, .1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      background: #2d5a80;
      color: white;
      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: block;
        margin-bottom: 10px;
        box-shadow: 0 4px 20px 0px rgba(0, 0, 0, .1);
      }
    }
  }
}
</style>
