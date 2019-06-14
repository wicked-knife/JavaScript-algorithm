/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  let B = []
  for (let i = 0; i < A[0].length; i++) {
    B.push([])
    for (let j = 0; j < A.length; j++) {
      B[i].push(A[j][i])
    }
  }
  
  return B   
}

export default transpose