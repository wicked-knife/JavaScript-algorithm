/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let dic = {},arr = s.split('')
  for (const c of arr) {
    dic[c] = (dic[c] || 0) + 1
  }
  for (const key in dic) {
    if(dic[key] == 1) return arr.indexOf(key)
  }
  return -1
}

export default firstUniqChar