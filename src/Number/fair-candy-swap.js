/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  const sumA = A.reduce((acc, cur) => acc += cur)
  const sumB = B.reduce((acc, cur) => acc += cur)
  const avg = (sumA + sumB) / 2
  const diff = avg - sumA
  for(let i = 0 ; i < A.length; i++) {
    if(B.includes( A[i] + diff )) {
      return [ A[i], A[i] + diff ]
    }
  }
}

export default fairCandySwap