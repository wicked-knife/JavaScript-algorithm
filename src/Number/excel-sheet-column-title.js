/**
 * 主要使用递归
 * @param {number} n
 * @return {string}
 */

const letters = [
  'Z',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]
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
