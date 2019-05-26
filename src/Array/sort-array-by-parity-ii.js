/**
 * @param {number[]} A
 * @return {number[]}
 * 这个没什么说的，leetcode给的测试用例奇偶数都是按大小顺序排好的
 */
var sortArrayByParityII = function (A) {
  const res = []
  let oddIndex = 1
  let evenIndex = 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      res[evenIndex] = A[i]
      evenIndex += 2
    } else {
      res[oddIndex] = A[i]
      oddIndex += 2
    }
  }
  return res
}
export default sortArrayByParityII