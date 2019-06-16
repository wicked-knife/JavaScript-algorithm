/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  if(A.length < 3 || A[0] > A[1]) {
    return false
  }
  let flag = undefined
  for(let i = 0; i < A.length - 1; i++) {
    if(A[i] === A[i + 1]) {
      return false
    }
    if(A[i] < A[i + 1]) {
      if(flag) {
        return false
      }
      continue
    }
    if(A[i] > A[i + 1]) {
      flag = true
      if(!flag) {
        return false
      }
    }
  }
  return flag === true
}

export default validMountainArray