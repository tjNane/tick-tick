<template>
  <div class="sidebar">
    <div class="user-info">
      <div>
        <img src="../../../assets/images/user-img.jpg" alt="">
        <div>spirytus</div>
      </div>
    </div>
    <div class="navs">
      <div v-for="(item, index) in filterRouter" :key="index" class="nav-item">
        <div class="nav-item-title" @click="switchRouter(index, item.children[0].name)"><i :class="['iconfont', item.icon]"></i>{{item.meta.title}}</div>
        <router-link tag="div" :to="{ name: sub.name }" :class="['nav-item-sub', { 'nav-item-sub-active': currentRouter == index}]" v-for="(sub, idx) in item.children" :key="idx">{{sub.meta.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { routes } from '@/router'

export default {
  data () {
    return {
      routes,
      currentRouter: -1
    }
  },
  computed: {
    filterRouter: function () {
      return this.routes.filter(ele => ele.name !== 'index')
    }
  },
  methods: {
    // 切换路由
    switchRouter (index, name) {
      this.currentRouter = index
      this.$router.push({ name: name })
    }
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
      background: $tint-color;
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
  .navs{
    padding: 10px;
    height: calc(100vh - 150px);
    box-sizing: border-box;
    .nav-item{
      background: $tint-color;
      border-radius: 6px;
      margin-bottom: 10px;
      box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, .1);
      overflow: hidden;
      div{
        height: 40px;
        line-height: 40px;
        color: white;
        padding-left: 10px;
        font-size: 15px;
        cursor: pointer;
        &.nav-item-title{
          border-bottom:1px solid #204d73;
        }
        &.nav-item-sub{
          height: 0;
          overflow: hidden;
          padding-left: 35px;
          border-bottom:1px solid #204d73;
          position: relative;
          &::after{
            content: '';
            width: 6px;
            height: 6px;
            border: 2px solid white;
            border-radius: 50%;
            position: absolute;
            left: 13px;
            top: 0;
            bottom: 0;
            margin: auto;
          }
          &.nav-item-sub-active{
            height: auto;
          }
          &:last-child{
            border: 0;
          }
        }
      }
      .iconfont{
        padding-right: 10px;
      }
    }
  }
}
.router-link-active{
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, .3) inset;
}
</style>
