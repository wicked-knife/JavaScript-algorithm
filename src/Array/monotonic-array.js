/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let flag = undefined
  for(let i = 0 ; i < A.length - 1; i++) {
    if(flag === undefined) {
      if(A[i] !== A[i + 1]) {
        flag = A[i] < A[i + 1]
      } 
    }
    if(flag !== undefined) {
      if(A[i] === A[i + 1]) {
        continue
      }
      if(flag) {
        if(A[i + 1] < A[i]) {
          return false
        }
      } else {
        if(A[i + 1] > A[i]) {
          return false
        }
      }
    }
  }
  return true
}

export default isMonotonic