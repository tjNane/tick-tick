<template>
  <div class="input-number">
    <input type="text" :value="currentValue" @change="handleChange">
    <div class="btn-wrap">
      <button @click="handleDown" :disabled="currentValue <= min">-</button>
      <button @click="handleUp" :disabled="currentValue >= max">+</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 最大值
    max: {
      type: Number,
      default: Infinity
    },
    // 最小值
    min: {
      type: Number,
      default: -Infinity
    },
    // value
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val)
      this.$emit('onchange', val)
    },
    value (val) {
      this.updateValue(val)
    }
  },
  methods: {
    updateValue (val) {
      if (val > this.max) val = this.max
      if (val < this.min) val = this.min
      this.currentValue = val
    },
    handleDown () {
      if (this.currentValue <= this.min) return
      this.currentValue -= 1
    },
    handleUp () {
      if (this.currentValue >= this.max) return
      this.currentValue += 1
    },
    handleChange (event) {
      var val = event.target.value.trim()
      var max = this.max
      var min = this.min
      if (!isNaN(val)) {
        val = Number(val)
        this.currentValue = val
        if (val > max) {
          this.currentValue = max
        } else if (val < min) {
          this.currentValue = min
        } else {
          event.target.value = this.currentValue
        }
      }
    }
  },
  mounted () {
    this.updateValue(this.value)
  }
}
</script>

<style lang="scss" scoped>
.input-number {
  display: flex;
  flex-direction: column;
  width: 200px;
  input {
    border: 1px solid #dedede;
    width: 200px;
    height: 30px;
    border-radius: 15px;
    outline: 0;
    text-indent: 10px;
    font-size: 14px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
  .btn-wrap{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    button{
      width: 30px;
      height: 30px;
      background: white;
      color: $primary-color;
      border: 0;
      outline: 0;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      font-size: 20px;
      text-align: center;
      line-height: 30px;
      cursor: pointer;
    }
  }
}
</style>
