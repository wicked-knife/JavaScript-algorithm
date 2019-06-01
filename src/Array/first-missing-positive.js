/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let ret = 1
  while(nums.indexOf(ret) !== -1) {
    ret++
  }
  return ret
}

export default firstMissingPositive