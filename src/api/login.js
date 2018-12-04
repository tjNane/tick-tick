import request from '@/utils/request'

/**
 * 登录
 */
export const loginByUsername = ({
  username,
  password
}) => request('/login/index', {
  username,
  password
})

/**
 * 获取用户信息
 */
export const getUserInfo = () => request('/user/info', {})
