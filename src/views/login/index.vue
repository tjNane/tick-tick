<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      label-position="left"
      status-icon
      class="form-container"
      @keyup.enter.native="loginHandle">
        <img :src="require('@/assets/images/login-logo.png')" class="logo">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            autocomplete="on"
            placeholder="用户名 ╰(*°▽°*)╯">
            <i slot="prefix" class="form-item-icon iconfont t-admin"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            :type="passwordType"
            v-model="loginForm.password"
            autocomplete="on"
            placeholder="密码 (°ー°〃)">
            <i slot="prefix" class="form-item-icon iconfont t-password"></i>
            <i slot="suffix" class="form-item-icon show-pwd iconfont t-eye" @click="showPassword"></i>
          </el-input>
        </el-form-item>
        <el-button type="primary" :loading="loading" @click="loginHandle" class="login-btn">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    const validataUsername = (rule, value, callback) => {
      value === '' ? callback(new Error('请输入用户名')) : callback()
    }
    const validatePassword = (rule, value, callback) => {
      value === '' ? callback(new Error('请输入密码')) : callback()
    }
    return {
      // 登录表单
      loginForm: {
        username: '',
        password: ''
      },
      // 校验规则
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validataUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password'
    }
  },
  methods: {
    showPassword () {
      this.passwordType === 'password' ? this.passwordType = 'text' : this.passwordType = 'password'
      console.log(window.location.origin)
    },
    loginHandle () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            // 登录成功，跳转到主页
            this.loading = false
            this.$router.push('/index')
          }, () => {
            // 登录失败
            this.loading = false
          })
        } else {
          // 验证失败（账号或密码为空）
          this.loading = false
          this.$message.error('账号密码不能为空 ~')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $primary-color;
  .form-container{
    width: 370px;
    height: 300px;
    background: white;
    border-radius: 6px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow: 0 4px 8px 0px rgba(0, 0, 0, .1);
    padding: 60px 20px 0;
    box-sizing: border-box;
    .logo{
      position: absolute;
      top: -40px;
      left: 0;
      right: 0;
      margin: auto;
    }
    .form-item-icon{
      padding: 0 4px 0 4px;
      color: $primary-color;
    }
    .show-pwd{
      cursor: pointer;
    }
    .login-btn{
      display: block;
      margin: 40px auto 0;
      width: 100%;
    }
  }
}

</style>
