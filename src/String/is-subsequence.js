/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let index = -1
  for(let char of s) {
    index = t.indexOf(char, index + 1)
    if(index === -1) {
      return false
    }
  }
  return true
}

export default isSubsequence