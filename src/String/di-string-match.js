/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let max = S.length
  let min = 0
  let ret = []
  for(let i = 0 ; i < S.length; i++) {
    if(S[i] === 'I') {
      ret.push(min)
      min++
    } else {
      ret.push(max)
      max--
    }
  }
  ret.push(max)
  return ret
}

export default diStringMatch