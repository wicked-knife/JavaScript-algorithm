/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 笨办法
 */ 
/* var rotate = function(nums, k) {
  let temp
  for(let i = 0; i < k; i++) {
    for(let _i = 1; _i < nums.length; _i++) {
      temp = nums[_i]
      nums[_i] = nums[0]
      nums[0] = temp
    }
  }
  return nums
} */


var rotate = function(nums, k) {
  nums.splice(0, 0, ...nums.splice(nums.length - k))
  return nums
} 

export default rotate