/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  let s = n.toString(2)
  for(let i = 0 ; i < s.length; i++) {
    if( s[i] * 1 % 2 === i % 2) {
      return false
    }
  }
  return true
}
export default hasAlternatingBits