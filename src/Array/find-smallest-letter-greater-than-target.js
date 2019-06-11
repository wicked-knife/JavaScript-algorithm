/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  for(let l of letters) {
    if(l > target) {
      return l
    }
  }
  return letters.shift()
}

export default nextGreatestLetter