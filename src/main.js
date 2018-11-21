import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './global' // 全局注册组件
import Element from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/index.scss'

Vue.config.productionTip = false

Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
