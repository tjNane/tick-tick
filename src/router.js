import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/views/layout/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainLayout,
      redirect: '/index',
      name: 'index',
      children: [
        { path: '/index', component: () => import('./views/index/index'), meta: { title: '首页' } }
      ]
    },
    {
      path: '/practise',
      component: MainLayout,
      redirect: '/practise',
      name: 'practise',
      children: [
        { path: 'component', component: () => import('./views/practise/component'), meta: { title: '组件' } }
      ]
    }
  ]
})
