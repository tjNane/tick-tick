<template>
  <div class="rich-text" :style="{ width, height }">
    <quill-editor
      v-model="editorValue"
      :style="{ height: `${parseInt(height) - 60}px` }"
      :options="options">
    </quill-editor>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    quillEditor
  },
  data () {
    return {
      // 富文本的内容
      editorValue: ''
    }
  },
  props: {
    // 用于接收v-model的值
    value: {
      type: String
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    options: {
      type: Object,
      default: () => ({
        placeholder: '请输入内容'
      })
    }
  },
  watch: {
    editorValue (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.editorValue = val
    }
  }
}
</script>
