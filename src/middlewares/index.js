import { Message, MessageBox } from 'element-ui'

export default {
  install: function (Vue) {
    /**
     * 统一的网络请求处理
     * @param {Promise} requestPromise 请求的Promise
     * @param {Function} successCallback 成功回调
     * @param {Function} errorCallback 失败函数
     * @param {Boolean} selfHandle 是否自己处理错误信息
     */
    Object.defineProperty(Vue.prototype, '$http', {
      value: function (requestPromise, successCallback, errorCallback, selfHandle) {
        requestPromise.then(res => {
          if (!res) return
          // 针对有status属性的情况
          if (res) {
            successCallback && successCallback(res)
          } else {
            // 其他情况，当成错误信息显示
            const err = new Error()
            throw err
          }
        }).catch(err => {
          if (!selfHandle) {
            // 显示错误信息
            Message({
              message: err.message,
              type: 'error',
              duration: 5 * 1000
            })
          }
          errorCallback && errorCallback(err)
        })
      }
    })

    /**
      * 统一的确认框
      * @param {String} title 标题
      * @param {String} content 文本内容
      * @param {Function} confirmCallback 确定按钮的回调函数
      * @param {Function} cancelCallback 取消按钮回调函数
      */
    Object.defineProperty(Vue.prototype, '$confirm', {
      value: function (title, content, confirmCallback, cancelCallback) {
        MessageBox.confirm(content, title, {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          confirmCallback && confirmCallback()
        }).catch(() => {
          cancelCallback && cancelCallback()
        })
      }
    })
  }
}
