<template>
  <div class="tilte-panel">
    <span>{{name}}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.tilte-panel{
  width: 100px;
  height: 40px;
  padding: 0 10px;
  border-radius: 6px;
  background: $sup-color-ys;
  border-left: 10px solid $sup-color-y;
  line-height: 40px;
  margin-bottom: 20px;
}
</style>
