/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  paragraph = paragraph.replace(/[!?',;.]/g, ' ').toLowerCase().split(/\s+/)
  const map = {}
  let commonWord = ''
  let max = 0
  for(let word of paragraph) {
    map[word] = (map[word] || 0) + 1
  }
  for(let key in map) {
    if( !banned.includes(key) ) {
      if(map[key] > max) {
        max = map[key]
        commonWord = key
      }
    }
  }
  return commonWord
}

export default mostCommonWord