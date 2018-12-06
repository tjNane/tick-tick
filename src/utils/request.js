import axios from 'axios'
import store from '@/store'

// 添加请求设置
const instance = axios.create({
  baseURL: '/',
  timeout: 30000
})

// 添加请求拦截
instance.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (store.getters.token) {
      config.headers['user-token'] = localStorage.getItem('user-token')
    }
  }
  return config
}, error => Promise.reject(error))

export default (url = '', data = {}, type = 'POST', headers = {}) => {
  return new Promise((resolve, reject) => {
    let httpPromise = null
    if (type.toUpperCase() === 'GET') {
      httpPromise = instance({
        method: type,
        url: url,
        params: data,
        headers
      })
    } else {
      httpPromise = instance({
        method: type,
        url: url,
        data: data,
        headers
      })
    }
    httpPromise.then(res => {
      resolve(res.data)
    }).catch(err => {
      let errMsg = '请求失败'
      if (err.response && err.response.status >= 500 && err.response.status < 600) {
        errMsg = '服务器开小差了~'
      } else if (err.code === 'ECONNABORTED') {
        errMsg = '请求超时'
      }
      reject(new Error(errMsg))
    })
  })
}
