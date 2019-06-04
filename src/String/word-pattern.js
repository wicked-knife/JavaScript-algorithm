/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  pattern = pattern.split('')
  str = str.split(' ')
  if(pattern.length !== str.length) {return false}

  const map = {}

  for(let p = 0 ; p < pattern.length; p++) {
    if(map[ pattern[p] ] === undefined) {
      if(Object.values(map).includes(str[p])) {
        return false
      }
      map[ pattern[p] ] = str[p]
    }

    if(map[ pattern[p] ] !== str[p]) {
      return false
    }
  }

  return true
}

export default wordPattern