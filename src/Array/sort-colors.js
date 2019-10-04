/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  function swap(m,n) {
    let temp = nums[m]
    nums[m] = nums[n]
    nums[n] = temp
  }
  let startIndex = 0
  let endIndex = nums.length - 1
  for(let i = 0 ; i < nums.length; i++) {
    if(nums[i] === 0) {
      swap(i, startIndex)
      startIndex++
    }
    if(nums[i] === 2) {
      swap(i, endIndex)
      endIndex--
      i--
    }
    if(i === endIndex) {
      break
    }
  }
  return nums
}

export default sortColors