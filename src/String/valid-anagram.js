/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) {return false}
  const sMap = {}
  const tMap = {}
  for(let i = 0 ; i < s.length; i++) {
    sMap[s[i]] === undefined ? sMap[s[i]] = 0 : sMap[s[i]]++
    tMap[t[i]] === undefined ? tMap[t[i]] = 0 : tMap[t[i]]++
  }
  for(let key in sMap) {
    if(tMap[key] !== sMap[key]) {
      return false
    }
  }
  return true
}


export default isAnagram