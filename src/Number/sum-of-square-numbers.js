/** 
 * @param {number} c
 * @return {boolean}
 */
// var judgeSquareSum = function(c) {
//   let a = Math.ceil( Math.sqrt(c) )
//   let b = 0
//   while(a >= b) {
//     let result = Math.pow(a, 2) + Math.pow(b, 2)
//     if(result === c) {return true}
//     if(result > c) {a--}
//     if(result < c) {b++}
//   }
//   return false
// }



var judgeSquareSum = function(c) {
  const mid = Math.ceil( Math.sqrt(c) )
  for(let i = 0 ; i <= mid; i++) {
    if( Math.sqrt( c - Math.pow(i, 2) ) % 1 === 0) {
      return true
    }
  }
  return false
}


export default judgeSquareSum