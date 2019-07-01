/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
  const max = B.length / A.length + 2
  let reducer = ''
  for (let i = 1; i <= max; i++) {
    reducer += A
    if(reducer.includes(B)) {
      return i
    }
  }
  return -1
}


export default repeatedStringMatch