/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if(num === 1 || num === 0) {return !!num}
  if(num % 2 === 0) {
    return isUgly(num / 2)
  }
  if(num % 3 === 0) {
    return isUgly(num / 3)
  }
  if(num % 5 === 0) {
    return isUgly(num / 5)
  }
  return false
}

export default isUgly