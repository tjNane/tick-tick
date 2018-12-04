const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: '../assets/images/user-img.jpg',
    username: 'Super Admin'
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: '../assets/images/user-img.jpg',
    username: 'Normal Editor'
  }
}

export default {
  // 登录
  loginByUsername (options) {
    const { username, password } = JSON.parse(options.body)
    let respon = {}
    if (!['admin', 'editor'].includes(username)) {
      respon = {
        code: 501,
        message: '用户不存在'
      }
    } else if (!(password && password === '123456')) {
      respon = {
        code: 501,
        message: '密码不正确'
      }
    } else {
      respon = {
        code: 200,
        data: userMap[username],
        message: '登录成功'
      }
    }
    return respon
  },
  // 获取用户信息
  getUserInfo () {
    let token = ''
    if (localStorage.getItem('user-token')) {
      token = localStorage.getItem('user-token')
    }
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  }
}
