/**
 * 使用双指针的方法
 * 一般方法就不写了
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let i = 0
  let j = A.length - 1
  const ret = []
  while(i < j) {
    const x = Math.pow(A[i], 2)
    const y = Math.pow(A[j], 2)
    if(x > y) {
      ret.unshift(x)
      i++
      continue
    }
    if(x < y) {
      ret.unshift(y)
      j--
      continue
    }
    if(x === y) {
      ret.unshift(x)
      ret.unshift(y)
      i++
      j--
    }
  }
  i === j && ret.unshift(Math.pow(A[i], 2))
  return ret
}


export default sortedSquares