/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let _magazine = magazine
  for(let i = 0 ; i < ransomNote.length; i++) {
    _magazine = _magazine.replace(ransomNote[i], '')
  }
  return magazine.length - _magazine.length === ransomNote.length
}

export default canConstruct