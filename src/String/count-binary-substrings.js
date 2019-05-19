/**
 * @tip this is bad
 * @param {string} s
 * @return {number}
 */
// var countBinarySubstrings = function (s) {
//   let pivot = s.length % 2 ? (s.length - 1) / 2 : s.length / 2
//   let result = 0
//   for (let i = 1; i <= pivot; i++) {
//     let reg = new RegExp(`(?<=0{${i}})1{${i}}|(?<=1{${i}})0{${i}}`, 'g')
//     s.match(reg) && (result += s.match(reg).length)
//   }
//   return result
// }

var countBinarySubstrings = function (s) {
  let count = 0
  let cur = 1
  let cache = 0
  for(let i = 0; i < s.length - 1; i++) {
    if(s[i] === s[i + 1]) {
      cur++
    } else {
      cache = cur
      cur = 1
    }
    if(cache >= cur) {
      count++
    }
  }
  return count
}

export { countBinarySubstrings }