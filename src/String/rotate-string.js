/**
 * 呜呜笨办法
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
// var rotateString = function(A, B) {
//   if(!A && !B) {
//     return true
//   }
//   if(A.length !== B.length) {
//     return false
//   }
//   let max = A.length
//   A = A.split('')
//   while(max !== 0) {
//     A.push( A.shift() )
//     if(A.join('') === B) {
//       return true
//     }
//     max--
//   }
//   return false
// }

/** 聪明办法
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if(A.length !== B.length) {return false}
  return (A += A).includes(B)
}



export default rotateString