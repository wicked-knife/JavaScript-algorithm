/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  N = N.toString(2)
  let s = ''
  for(let i = 0; i < N.length; i++) {
    s += N[i] === '0' ? '1' : '0'
  }
  return parseInt(s, 2)
}

export default bitwiseComplement