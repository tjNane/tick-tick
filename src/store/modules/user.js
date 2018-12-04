import { loginByUsername, getUserInfo } from '@/api/login'
import { Message } from 'element-ui'

const user = {
  state: {
    name: '',
    introduction: '',
    token: localStorage.getItem('user-token') || '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginByUsername(userInfo).then(res => {
          if (res.code === 200) {
            console.log(res)
            commit('SET_TOKEN', res.data.token)
            localStorage.setItem('user-token', res.data.token)
            Message.success(res.message)
            resolve()
          } else {
            Message.error(res.message)
            reject(res.message)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    getUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(({ data }) => {
          if (data.roles && data.roles.length > 0) {
            commit('SET_ROLES', data.roles)
          } else {
            reject(data)
          }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    logout ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        localStorage.removeItem('user-token')
        resolve()
      })
    }
  }
}

export default user
