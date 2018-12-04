import router from '@/router'
import store from '@/store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (store.getters.token) {
    // 有角色信息
    if (to.path === '/login') {
      next('/index')
      NProgress.done()
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      // 尝试获取角色信息
      store.dispatch('getUserInfo').then(() => {
        next({ ...to })
        NProgress.done()
      }).catch(() => {
        next('/login')
        NProgress.done()
      })
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
