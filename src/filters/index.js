/**
 * 转大写
 */
export const stringToUpper = (value) => {
  if (!value) return 'nullString'
  return value.toUpperCase()
}

/**
 * 超出长度添加省略号
 * @param {Number} max 最多显示的字符串
 */
export const addEllipsis = (value, max) => {
  if (!value) return ''
  if (value.length <= max) return value
  return value.slice(0, max) + '...'
}

/**
 * 格式化日期
 */
export const formatDate = (value) => {
  if (!value) return ''
  const oneHour = 3600 * 1000
  const hours = Math.ceil((Date.now() - new Date(value)) / oneHour)
  if (hours >= 24) {
    return value.slice(0, 10)
  } else {
    return `${hours}小时前`
  }
}
