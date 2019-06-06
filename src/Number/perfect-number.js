/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if(num === 1) {return false}
  let set = new Set()
  for(let i = 2; i < Math.ceil(num / 2); i++) {
    if(num % i === 0) {
      set.add(i)
      set.add(num / i)
    }
  }
  return Array.from(set).reduce((acc, cur) => acc + cur, 1) === num ? true : false
}

export default checkPerfectNumber