/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let s = ''
  let t = ''
  for(let i = 0 ; i < S.length; i++) {
    if(S[i] === '#') {
      s = s.slice(0, s.length - 1)
    } else {
      s += S[i]
    }
  }
  for(let i = 0 ; i < T.length; i++) {
    if(T[i] === '#') {
      t = t.slice(0, t.length - 1)
    } else {
      t += T[i]
    }
  }
  return s === t
}


export default backspaceCompare