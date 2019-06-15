/** 测试用例数组是按奇偶排序好的
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  const ret = []
  for(let i = 0 ; i < A.length; i++) {
    A[i] % 2 === 0 ? ret.unshift(A[i]) : ret.push(A[i])
  }
  return ret
}


export default sortArrayByParity