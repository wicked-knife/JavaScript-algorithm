/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  const oddFlag = A[0].length % 2 === 1
  const mid = Math.floor(A[0].length / 2)
  for(let i = 0 ; i < A.length; i++) {
    for(let j = 0 ; j < mid; j++) {
      if(A[i][j] === A[i][ A[i].length - 1 - j ]) {
        A[i][j] = A[i][ A[i].length - 1 - j ] = A[i][j] = Number(!A[i][j])
      }
    }
    if(oddFlag) {
      A[i][mid] = Number(!A[i][mid])
    }
  }
  return A
}

export default flipAndInvertImage