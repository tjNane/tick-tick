<template>
  <div>
    <app-editor v-model="content"></app-editor>
    <el-button type="primary" class="btn" @click="consoleText">console</el-button>
  </div>
</template>

<script>
import AppEditor from '@/components/AppEditor'

export default {
  components: {
    AppEditor
  },
  data () {
    return {
      // 富文本内容
      content: '<p>asdsadsa</p><p><strong>xcvcv</strong></p><p>wer</p>'
    }
  },
  methods: {
    consoleText () {
      console.log(this.content)
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
