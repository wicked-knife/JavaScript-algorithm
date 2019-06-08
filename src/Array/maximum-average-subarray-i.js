/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  if(nums.length === 1) {return nums[0]}
  let max = nums.slice(0, k).reduce((acc, cur) => acc+=cur)
  let temp = max
  for(let i = 1; i < nums.length - k + 1; i++) {
    temp = temp + nums[i + k - 1] - nums[i - 1]
    temp > max && (max = temp)
  }
  return max / k
}

export default findMaxAverage