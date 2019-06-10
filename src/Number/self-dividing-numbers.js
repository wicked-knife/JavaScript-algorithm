/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const ret = []
  function validate(n){
    if(n % 10 === 0) {return false}
    return n.toString().split('').every(e => n % (e * 1) === 0)
  }
  for(let i = left; i <= right; i++) {
    validate(i) && ret.push(i)
  }
  return ret
}

export default selfDividingNumbers