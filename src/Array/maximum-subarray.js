// 主要用到动态规划
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var max = Math.max(...nums)
  var temp = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (temp > 0) {
      temp += nums[i]
    } else {
      temp = nums[i]
    }

    if (temp > max) {
      max = temp
    }
  }
  return max
}

export default maxSubArray
