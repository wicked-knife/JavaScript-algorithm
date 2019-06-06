/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const times = s.length / (2 * k)
  let ret = ''
  debugger
  for(let i = 0; i < times; i ++) {
    let subString = s.slice(i * 2 * k, (i + 1) * 2 * k)
    ret += subString.slice(0,k).split('').reverse().join('') + subString.slice(k, 2 * k)
  }
  return ret
}

export default reverseStr