/**
 * 最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(!strs.length) {return ''}
  let ret = ''
  const base = strs[0]
  const rest = strs.slice(1)
  for(let i = 0; i < base.length; i++) {
    for(let j = 0; j < rest.length; j++) {
      if(rest[j][i] !== base[i]){
        return ret
      }
    }
    ret += base[i]
  }
  return ret
}

export default longestCommonPrefix