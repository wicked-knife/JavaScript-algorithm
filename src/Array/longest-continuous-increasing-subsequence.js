/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if(!nums.length){return 0}
  if(nums.length === 1) {return 1}
  let ret = 1
  let max = 1
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      max++
      continue
    }
    if (nums[i + 1] < nums[i]) {
      max > ret && (ret = max)
      max = 1
      continue
    }
    if(nums[i + 1] === nums[i]) {
      max > ret && (ret = max)
      max = 1
    }
  }
  return Math.max(ret, max)
}

export default findLengthOfLCIS