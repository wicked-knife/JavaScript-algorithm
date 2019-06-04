/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let matches = s.match(/[aeiou]/gi)
  let ret = ''
  for(let i = 0 ; i < s.length; i++) {
    if(/[aeiou]/i.test(s[i])) {
      ret += matches.pop()
      continue
    }
    ret += s[i]
  }
  return ret
}


export default reverseVowels