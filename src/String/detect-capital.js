/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  return /^[A-Z]+$/.test(word) ? true : /^[a-z]+$/.test(word) ? true :  /^[A-Z][a-z]+$/.test(word) ? true : false
}
export default detectCapitalUse