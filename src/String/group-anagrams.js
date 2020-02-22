/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const counter = {}
  for(let str of strs) {
    const sortedStr = str.split('').sort((a,b) => a.charCodeAt() - b.charCodeAt()).join('')
    counter[sortedStr] ? counter[sortedStr].push(str) : counter[sortedStr] = [str]
  }
  return Object.values(counter)
}

export default groupAnagrams