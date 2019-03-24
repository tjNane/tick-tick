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
    path: '/icons',
    component: MainLayout,
    redirect: '/icons',
    name: 'icons',
    icon: 't-icon',
    meta: { title: '图标' },
    children: [
      { path: 'icons', name: 'iconfont', component: () => import('./views/icons/index'), meta: { title: 'iconfont' } }
    ]
  },
  {
    path: '/components',
    component: MainLayout,
    redirect: '/components/table',
    name: 'components',
    icon: 't-manage',
    meta: { title: '组件示例' },
    children: [
      { path: 'table', name: 'table', component: () => import('./views/componentsDisplay/table'), meta: { title: '表格' } },
      { path: 'rich-text', name: 'rich-text', component: () => import('./views/componentsDisplay/richText'), meta: { title: '富文本' } },
      { path: 'charts', name: 'charts', component: () => import('./views/componentsDisplay/charts'), meta: { title: '图表' } },
      { path: 'demo', name: 'demo', component: () => import('./views/componentsDisplay/demo'), meta: { title: 'demo' } }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  routes
})
