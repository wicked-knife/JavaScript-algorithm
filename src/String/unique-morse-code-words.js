/**
 * @param {string[]} words
 * @return {number}
 */
const MORSE = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..']

var uniqueMorseRepresentations = function(words) {
  const set = new Set()
  for(let word of words) {
    let _morse = ''
    for(let c = 0 ; c < word.length; c++) {
      _morse += MORSE[word[c].charCodeAt(0) - 97]
    }
    !set.has(_morse) && set.add(_morse)
  }
  return set.size
}

export default uniqueMorseRepresentations