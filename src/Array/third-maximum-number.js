/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  if(nums.length < 2) { return Math.max(...nums) }
  let max1 = Number.MIN_SAFE_INTEGER
  let max2 = Number.MIN_SAFE_INTEGER
  let max3 = Number.MIN_SAFE_INTEGER
  let count = 0
  for(let i = 0 ; i < nums.length; i++) {
    if(nums[i] > max1) {
      max3 = max2
      max2 = max1
      max1 = nums[i]
      count++
      continue
    }
    if(nums[i] < max1 && nums[i] > max2) {
      max3 = max2
      max2 = nums[i]
      count++
      continue
    }
    if(nums[i] < max2 && nums[i] > max3) {
      max3 = nums[i]
      count++
      continue
    }
  }
  return count >= 3 ? max3 : max1
}

export default thirdMax