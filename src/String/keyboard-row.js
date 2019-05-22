/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let res = []
  const keyboards = [
    /^[qwertyuiop]+$/i,
    /^[asdfghjkl]+$/i,
    /^[zxcvbnm]+$/i
  ]
  for(let i = 0; i < words.length; i++) {
    let regIndex = 0
    for(let k = 0; k < keyboards.length; k++) {
      if( words[i][0].match( keyboards[k] ) ) {regIndex = k}
    }
    if(words[i].match(keyboards[regIndex])) {res.push(words[i])}
  }
  return res
}

export default findWords