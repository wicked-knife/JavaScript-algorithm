/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  let indexes = []
  let ret = []
  for(let i = 0; i < S.length; i++) {
    if(S[i] === C) {
      indexes.push(i)
    }
  }
  for(let i = 0 ; i < S.length; i++) {
    let min = Number.MAX_SAFE_INTEGER
    for(let j = 0 ; j < indexes.length; j++) {
      min = Math.min(min, Math.abs( i - indexes[j] ))
    }
    ret.push(min)
  }
  return ret
}

export default shortestToChar