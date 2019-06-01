/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let ret = 0
  for(let i = s.length - 1; i >= 0; i--) {
    const code = s[i].charCodeAt() - 64
    ret += Math.pow(26, s.length - i - 1) * code
  }
  return ret
}
export default titleToNumber
