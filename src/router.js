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
      { path: 'component', name: 'component', component: () => import('./views/practise/component'), meta: { title: '组件' } },
      { path: 'circulation', name: 'circulation', component: () => import('./views/practise/circulation'), meta: { title: '列表渲染' } }
    ]
  },
  {
    path: '/table',
    component: MainLayout,
    redirect: '/table',
    name: 'table',
    icon: 't-keshilianxi',
    meta: { title: '表格' },
    children: [
      { path: 'common', name: 'common', component: () => import('./views/table/index'), meta: { title: '普通表格' } }
    ]
  }
]

export default new Router({
  routes
})
