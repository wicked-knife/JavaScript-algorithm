/**
 * 验证回文串
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if(s.length < 2) {return true}
  s = s.replace(/\W/g, '').toLowerCase()
  const len = s.length
  const mid = Math.floor(len/ 2)
  for(let i = 0; i < mid; i++) {
    if(s[i] !== s[len- i - 1]) {
      return false
    }
  }
  return true
}

export default isPalindrome