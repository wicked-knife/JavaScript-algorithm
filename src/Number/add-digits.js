/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if(num < 10) {return num}
  const result = num.toString().split('').reduce((acc, cur) => acc += +cur, 0)
  return result >= 10 ? addDigits(result) : result
}

export default addDigits