<template>
  <div>
    <title-panel name="数字输入框"></title-panel>
    <input-number
      v-model="value"
      :max="10"
      :min="5">
    </input-number>
  </div>
</template>

<script>
import TitlePanel from '@/components/TitlePanel.vue'
import InputNumber from './InputNumber.vue'

export default {
  components: {
    TitlePanel,
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
