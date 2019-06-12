/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  S = S.split(' ')
  const ret = []
  const reg = /[aeiou]/i
  for(let i = 0 ; i < S.length; i++) {
    let s = ''
    if(reg.test( S[i][0] )) {
      s = S[i] + 'm'
    } else {
      s = S[i].slice(1) + S[i][0] + 'm'
    }
    ret.push( s.padEnd( s.length + i + 2, 'a') )
  }
  return ret.join(' ')
}

export default toGoatLatin