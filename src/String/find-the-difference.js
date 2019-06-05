/**
 * 常规做法，用map
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// var findTheDifference = function(s, t) {
//   const map = {}
//   for(let i = 0; i < s.length; i++) {
//     map[ s[i] ] = (map[ s[i] ] || 0) + 1
//   }

//   for(let i = 0 ; i < t.length; i++) {
//     if(map[ t[i] ] !== undefined) {
//       map[ t[i] ]--
//       if(map[ t[i] ] < 0) {
//         return t[i]
//       }
//     } else {
//       return t[i]
//     }
//   }
// }

/**
 *  将 字符中串的为 转化成 数字的问题
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let diff = 0

  for (const char of t) {
    diff += char.charCodeAt(0)
  }

  for (const char of s) {
    diff -= char.charCodeAt(0)
  }

  return String.fromCharCode(diff)
}

export default findTheDifference