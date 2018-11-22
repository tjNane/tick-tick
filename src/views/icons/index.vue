<template>
  <div class="icons">
    <div
      v-for="(item, index) in iconList"
      :key="index"
      v-clipboard="item.className"
      @success="clipSuccess"
      @error="clipError"
      class="icons-item">
      <el-tooltip effect="dark" :content="item.className | classTag" placement="top">
        <i :class="['iconfont', item.className]"></i>
      </el-tooltip>
      <div>{{item.desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iconList: [
        { className: 't-cart', desc: 'cart' },
        { className: 't-user', desc: 'user' },
        { className: 't-star', desc: 'star' },
        { className: 't-message', desc: 'message' },
        { className: 't-email', desc: 'email' },
        { className: 't-classify', desc: 'classify' },
        { className: 't-password', desc: 'password' },
        { className: 't-charts', desc: 'charts' },
        { className: 't-eye', desc: 'eye' },
        { className: 't-home', desc: 'home' },
        { className: 't-admin', desc: 'admin' },
        { className: 't-video', desc: 'video' },
        { className: 't-component', desc: 'component' },
        { className: 't-arrowdown', desc: 'arrowdown' },
        { className: 't-arrowleft', desc: 'arrowleft' },
        { className: 't-arrowright', desc: 'arrowright' },
        { className: 't-arrowup', desc: 'arrowup' },
        { className: 't-table', desc: 'table' },
        { className: 't-guide', desc: 'guide' },
        { className: 't-menu', desc: 'menu' },
        { className: 't-close', desc: 'close' },
        { className: 't-refresh', desc: 'refresh' },
        { className: 't-setting', desc: 'setting' },
        { className: 't-practise', desc: 'practise' },
        { className: 't-onoff', desc: 'onoff' },
        { className: 't-address', desc: 'address' },
        { className: 't-icon', desc: 'icon' },
        { className: 't-brush', desc: 'brush' },
        { className: 't-camera', desc: 'camera' },
        { className: 't-clock', desc: 'clock' },
        { className: 't-computer', desc: 'computer' },
        { className: 't-empty', desc: 'empty' },
        { className: 't-flashlight', desc: 'flashlight' },
        { className: 't-integral', desc: 'integral' },
        { className: 't-manage', desc: 'manage' },
        { className: 't-offline', desc: 'offline' },
        { className: 't-picture', desc: 'picture' },
        { className: 't-share', desc: 'share' },
        { className: 't-voice', desc: 'voice' },
        { className: 't-search', desc: 'search' },
        { className: 't-financial', desc: 'financial' },
        { className: 't-decoration', desc: 'decoration' },
        { className: 't-zhtn', desc: 'zhtn' },
        { className: 't-financial', desc: 'financial' }
      ]
    }
  },
  filters: {
    classTag (val) {
      if (!val) return ''
      return `<i class="iconfont ${val}"></i>`
    }
  },
  methods: {
    clipSuccess () {
      this.$message.success('复制成功')
    },
    clipError (e) {
      this.$message.success('复制失败')
      throw new Error(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.icons{
  display: flex;
  flex-wrap: wrap;
  &-item{
    width: 108px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    cursor: pointer;
    &:hover{
      color: $primary-color;
    }
    .iconfont{
      font-size: 30px;
      margin-bottom: 10px;
    }
  }
}
</style>
