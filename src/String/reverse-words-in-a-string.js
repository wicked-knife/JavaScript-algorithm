/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(/\s+/).filter(v => /\S+/.test(v)).reverse().join(' ')
}

export default reverseWords