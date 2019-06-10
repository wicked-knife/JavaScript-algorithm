/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if(nums.length < 3) {
    return -1
  }
  let mid = 0
  let sumL = 0
  let sumR = nums.slice(mid + 1, nums.length).reduce((acc, cur) => acc+=cur, 0)
  if(sumL === sumR) {return mid}
  while(mid !== nums.length - 1) {
    mid++
    sumL += nums[mid - 1]
    sumR -= nums[mid]
    if(sumL === sumR) {
      return mid
    }
  }
  return -1
}

export default pivotIndex