/**
 * 
 * 使用正则表达式的回溯引用
 * 
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  return /^(\w+)\1+$/.test(s)
}

export default repeatedSubstringPattern