/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  let ret = []
  if(/\d/.test(S[0])){
    ret.push(S[0])
  } else {
    ret.push(S[0].toLowerCase(), S[0].toUpperCase())
  }
  for(let i = 1 ; i < S.length; i++) {
    if(/\d/.test(S[i])) {
      ret = ret.map(_s => _s += S[i])
    } else {
      let _ret = ret.slice()
      ret = ret.map(_s => _s += S[i].toLowerCase())
      ret.push(..._ret.map(_s => _s += S[i].toUpperCase()))
    }
  }
  return ret
}

export default letterCasePermutation