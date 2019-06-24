/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let max = - 1
  let maxIndex = -1
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > max) {
      max = nums[i]
      maxIndex = i
    }
  }
  return nums.filter(n => n * 2 <= max).length === nums.length - 1 ? maxIndex : -1
}

export default dominantIndex