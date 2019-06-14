/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  const AB = (A + ' ' + B).split(' ')
  const set = new Set()
  const map = {}
  for(let i = 0 ; i < AB.length; i++) {
    map[ AB[i] ] = (map[ AB[i] ] || 0) + 1
    if(map[ AB[i] ] === 1) {
      set.add(AB[i])
    } else {
      set.delete(AB[i])
    }
  }
  return Array.from(set)
}

export default uncommonFromSentences