import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './global' // 全局注册组件
import './permission'
import middleware from './middlewares' // 扩展vue原型的中间件
import Element from 'element-ui'
import VueClipboards from 'vue-clipboards'
import './mock'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/index.scss'

Vue.config.productionTip = false

Vue.use(Element)
Vue.use(middleware)
Vue.use(VueClipboards)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
