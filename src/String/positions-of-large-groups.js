/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
  const ret = []
  for(let i = 0 ; i < S.length - 2;) {
    let start = i
    let end = i + 1
    for(let j = i + 1; j < S.length; j++) {
      if(S[j] === S[i]) {
        end = j
      } else {
        break
      }
    }
    end - start > 1 && ret.push([start, end])
    i += end - start
  }
  return ret
}

export default largeGroupPositions