/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let S = ''
  let max = 0
  for(let i = 0; i < s.length; i++) {
    let _index = S.indexOf( s[i] )
    if(_index === -1) {
      S += s[i]
      S.length > max && (max = S.length)
      continue
    }
    S = S.slice( _index + 1 )
    i--
  }
  return max
}

export default lengthOfLongestSubstring