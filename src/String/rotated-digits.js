/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  let count = 0
  const reverseMap = {
    2:'5',
    5:'2',
    6:'9',
    9:'6'
  }
  for(let i = 1; i <= N; i++) {
    let s = i.toString()
    if( /^[0182569]+$/.test( s ) ) {
      let _s = ''
      for(let i = 0; i < s.length; i++) {
        _s += (reverseMap[ s[i] ] | s[i])
      }
      _s !== s && count++
    }
  }
  return count
}

export default rotatedDigits