import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/views/layout/index.vue'

Vue.use(Router)

export const routes = [
  { path: '/404', component: () => import('./views/errorPage/404'), hidden: true },
  { path: '/login', component: () => import('./views/login/index'), hidden: true },
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
    icon: 't-practise',
    meta: { title: '练习' },
    children: [
      { path: 'component', name: 'component', component: () => import('./views/practise/component'), meta: { title: '组件' } },
      { path: 'filters', name: 'filters', component: () => import('./views/practise/filters'), meta: { title: '过滤器' } },
      { path: 'directive', name: 'directive', component: () => import('./views/practise/directive'), meta: { title: '自定义指令' } }
    ]
  },
  {
    path: '/icons',
    component: MainLayout,
    redirect: '/icons',
    name: 'icons',
    icon: 't-table',
    meta: { title: '图标' },
    children: [
      { path: 'icons', name: 'iconfont', component: () => import('./views/icons/index'), meta: { title: 'iconfont' } }
    ]
  },
  {
    path: '/table',
    component: MainLayout,
    redirect: '/table',
    name: 'table',
    icon: 't-table',
    meta: { title: '表格' },
    children: [
      { path: 'common', name: 'common', component: () => import('./views/table/index'), meta: { title: '普通表格' } }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  routes
})
