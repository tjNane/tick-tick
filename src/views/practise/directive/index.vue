<template>
  <div>
    <div>
      <title-panel name="自动聚焦"></title-panel>
      <input type="text" class="inp" v-focus>
    </div>
    <div>
      <title-panel name="改变颜色"></title-panel>
      <div class="inp" v-changecolor="color">{{num}}</div>
      <div @click="add" class="mt20 btn">add</div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    /**
     * 钩子函数
     * bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
     * inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
     * update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。
     * componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
     * unbind：只调用一次，指令与元素解绑时调用。
     */
    focus: {
      inserted: function (el, binding, vnode) {
        el.focus()
        // console.log(el)
        // console.log(binding)
        // console.log(vnode)
      }
    },
    changecolor: {
      bind: function () {
        console.log('1 - bind')
      },
      inserted: function (el, binding, vnode) {
        el.style = 'color:' + binding.value
        console.log(binding.value)
        console.log('2 - inserted')
      },
      update: function () {
        console.log('3 - update')
      },
      componentUpdated: function () {
        console.log('4 - componentUpdated')
      },
      unbind: function (){
        console.log('5 - unbind')
      }
    }
  },
  data () {
    return {
      num: 5,
      color: 'red'
    }
  },
  methods: {
    add () {
      this.num++
    }
  }
}
</script>

<style lang="scss" scoped>
.inp {
  border: 1px solid #dedede;
  width: 200px;
  height: 30px;
  border-radius: 15px;
  outline: 0;
  text-indent: 10px;
  line-height: 30px;
  font-size: 14px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
}
.btn{
  width: 100px;
  height: 30px;
  background: white;
  color: $primary-color;
  border: 0;
  outline: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
</style>
