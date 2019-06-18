/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  K = K.toString().split('')
  K.reverse()
  A.reverse()
  A.length < K.length ? [A, K] = [K, A] : void 0
  A.push(0)
  const ret = []
  let flag = 0
  for(let i = 0; i < A.length; i++) {
    let result = A[i] * 1 + (K[i] || 0) * 1 + flag
    if(result >= 10) {
      flag = 1
      ret.unshift(result % 10)
    } else {
      flag = 0
      ret.unshift(result)
    }
  }
  return ret[0] === 0 ? ret.slice(1) : ret
}


export default addToArrayForm