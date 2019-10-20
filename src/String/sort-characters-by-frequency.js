/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const counter = {}
  for(let char of s) {
    counter[char] = (counter[char] || 0) + 1
  }
  return Object.entries(counter).sort((a,b) => b[1] - a[1]).reduce((acc, cur) => acc += cur[0].repeat(cur[1]), '')
}

export default frequencySort