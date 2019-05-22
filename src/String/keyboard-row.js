/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let res = []
  const keyboards = [
    /[qwertyuiop]/i,
    /[asdfghjkl]/i,
    /[zxcvbnm]/i
  ]
  for(let i = 0; i < words.length; i++) {
    let regIndex = 0
    let __passedFlag = 0
    for(let k = 0; k < keyboards.length; k++) {
      if( words[i][0].match( keyboards[k] ) ) {regIndex = k}
    }
    for(let j = 1; j < words[i].length; j++) {
      if( words[i][j].match(keyboards[regIndex]) ) {
        __passedFlag++
      } else {
        break
      }
    }
    if(__passedFlag === words[i].length - 1) {res.push(words[i])}
  }
  return res
}


export default findWords