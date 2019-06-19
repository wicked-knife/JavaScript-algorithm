/**
 * solution1
 * 使用双指针
 * @param {number[]} A
 * @return {boolean}
 */
// var canThreePartsEqualSum = function(A) {
//   if(A.length === 3) {
//     return A[0] === A[1] && A[1] === A[2]
//   }
//   const sum = A.reduce((acc, cur) => acc += cur)
//   let sumL = A[0]
//   let sumR = A[A.length - 1]
//   if(sum % 3 !== 0) {
//     return false
//   }
//   let i = 1, j = A.length - 2
//   while(i <= (j - 1) ) {
//     if(sumL !== sum / 3) {
//       sumL += A[i]
//       i++
//     }
//     if(sumR !== sum / 3) {
//       sumR += A[j]
//       j--
//     }
//     if( sumL === sumR && sumR === (sum / 3) ) {
//       if(sumR === ( A.slice(i, j + 1).reduce((acc, cur) => acc += cur, 0) )) {
//         return true
//       } else {
//         return false
//       }
//     }
//   }
//   return false
// }


/**
 * 这种解法真是又快又简单!
 * solution2
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  const sum = A.reduce((acc, cur) => acc += cur)
  if(sum % 3 !== 0) {
    return false
  }
  const avg = sum / 3
  let times = 0
  A.reduce((acc, cur) => {
    acc += cur
    if(acc === avg) {
      times++
      return 0
    }
    return acc
  }, 0)
  return times === 3
}



export default canThreePartsEqualSum