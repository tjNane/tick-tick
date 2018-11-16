import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/views/layout/index.vue'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    component: MainLayout,
    redirect: '/index',
    name: 'index',
    meta: { title: '首页' },
    children: [
      { path: '/index', component: () => import('./views/index/index'), meta: { title: '首页' } }
    ]
  },
  {
    path: '/practise',
    component: MainLayout,
    redirect: '/practise',
    name: 'practise',
    icon: 't-keshilianxi',
    meta: { title: '练习' },
    children: [
      { path: 'component', component: () => import('./views/practise/component'), meta: { title: '组件' } },
      { path: 'circulation', component: () => import('./views/practise/circulation'), meta: { title: '列表渲染' } }
    ]
  }
]

export default new Router({
  routes
})
