/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length < 3) {
    return nums.length
  }
  let current = Math.random()
  let canDelete = false
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== current) {
      current = nums[i]
      canDelete = false
    } else {
      if(!canDelete) {
        canDelete = true
      } else {
        nums.splice(i, 1)
        i--
      }
    }
  }
  return nums.length
}

export default removeDuplicates