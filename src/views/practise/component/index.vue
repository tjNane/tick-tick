<template>
  <div>
    <div>
      <title-panel name="数字输入框"></title-panel>
      <input-number
        v-model="value"
        :max="10"
        :min="5">
      </input-number>
    </div>
  </div>
</template>

<script>
import InputNumber from './InputNumber.vue'

export default {
  components: {
    InputNumber
  },
  data () {
    return {
      value: 5
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
