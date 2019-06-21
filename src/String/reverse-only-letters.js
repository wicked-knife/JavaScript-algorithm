/**
 * 使用双指针
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let start = '', end  = ''
  let i = 0, j = S.length - 1
  const reg = /[a-zA-Z]/
  while(i <= j) {
    if( reg.test(S[i]) && reg.test(S[j]) ) {
      if(i !== j) {
        start = start + S[j]
      }
      end = S[i] + end
      i++
      j--
      continue
    }
    if( !reg.test(S[i]) ) {
      if(i !== j) {
        start = start + S[i]
      }
      i++
    }
    if( !reg.test(S[j]) ) {
      end = S[j] + end
      j--
    }
  }
  return start + end
}

export default reverseOnlyLetters