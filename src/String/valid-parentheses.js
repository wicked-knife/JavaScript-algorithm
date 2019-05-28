/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = {
    '(': [],
    '{': [],
    '[': []
  }
  const match = {
    '}': '{',
    ')': '(',
    ']': '['
  }
  const reg = /[({[]/
  for (let i = 0; i < s.length; i++) {
    if (reg.test(s[i])) {
      map[s[i]].push(i)
    } else {
      let _s = match[s[i]]
      let len = map[_s].length
      if (!len) {
        return false
      }
      if ((i - map[_s][len - 1]) % 2 === 0) {
        return false
      } else {
        map[_s].length = len - 1
      }
    }
  }
  let values = Object.values(map)
  for (let i = 0; i < values.length; i++) {
    if (values[i].length) {
      return false
    }
  }
  return true
}

export default isValid
