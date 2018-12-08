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
  height: 40px;
  padding: 0 10px;
  border-radius: 6px;
  background: $sup-color-ys;
  border-left: 4px solid $sup-color-y;
  line-height: 40px;
  margin: 20px 0;
  font-size: 14px;
  color: rgb(250, 179, 1);
}
</style>
