/**
 * 主要使用递归
 * @param {number} n
 * @return {string}
 */

const letters = 'ZABCDEFGHIJKLMNOPQRSTUVWXYZ'
var convertToTitle = function(n, s) {
  s = s || ''
  if(n <= 26) {
    return letters[n] + s
  } else {
    let r  = n % 26
    let m = r === 0 ? Math.floor( n / 26 ) - 1 : Math.floor( n / 26 )
    return convertToTitle(m, letters[r] + s)
  }
}

export default convertToTitle
