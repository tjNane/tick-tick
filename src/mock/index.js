import Mock from 'mockjs'
import loginAPI from './login'
import tableAPI from './table'

// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function () {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}

Mock.setup({
  timeout: 600
})

// 登录相关
Mock.mock(/\/login\/index/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'get', loginAPI.logout)
Mock.mock(/\/user\/info/, 'post', loginAPI.getUserInfo)

// 表格
Mock.mock(/\/table\/index/, 'post', tableAPI.tableData)