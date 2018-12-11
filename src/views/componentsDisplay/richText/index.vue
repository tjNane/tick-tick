<template>
  <div>
    <app-editor v-model="content" :loading="loading"></app-editor>
    <el-button type="primary" class="btn" @click="consoleText">console</el-button>
  </div>
</template>

<script>
import AppEditor from '@/components/AppEditor'
import { richTextDetail } from '@/api/rich-text'

export default {
  components: {
    AppEditor
  },
  data () {
    return {
      // 富文本内容
      content: '',
      loading: true
    }
  },
  mounted () {
    this.getContent()
  },
  methods: {
    consoleText () {
      console.log(this.content)
    },
    getContent () {
      this.$http(richTextDetail(), res => {
        this.content = res.data
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.btn{
  display: block;
  margin: 0 auto;
}
</style>
