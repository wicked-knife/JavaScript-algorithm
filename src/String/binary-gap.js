/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
  let s = N.toString(2)
  let start = undefined
  let gap = 0
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '1') {
      if(start === undefined) {
        start = i
        continue
      } else {
        gap = Math.max(gap, i - start)
        start = i
      }
    }
  } 
  return gap
}


export default binaryGap