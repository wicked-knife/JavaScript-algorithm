/**
 * @solve1
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let a = s.split(' ')
  for(let i = 0; i< a.length; i++) {
    a[i] = a[i].split('').reverse().join('')
  }
  return a.join(' ')
}

/**
 * @solve2
 * @param {string} s
 * @return {string}
 */

var reverseWords2 = function(s) {
  return s.split('').reverse().join('').split(' ').reverse().join(' ')
}

export {reverseWords2, reverseWords}