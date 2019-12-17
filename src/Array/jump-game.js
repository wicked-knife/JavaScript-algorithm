/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if(nums.length === 1) {return true}
  let maxIndex = -1
  let startIndex = 0
  let endIndex = startIndex + nums[startIndex]
  if(endIndex > nums.length - 1) {
    return true
  }
  function findMaxIndex(startIndex, endIndex) {
    let ret = -1
    for(let i = startIndex; i <= endIndex; i++) {
      ret = Math.max(startIndex + (i - startIndex) + nums[i], ret)
    }
    return ret
  }
  while(maxIndex < nums.length - 1) {
    maxIndex = findMaxIndex(startIndex, endIndex)
    startIndex = endIndex
    endIndex = maxIndex
    if(startIndex === endIndex && endIndex !== nums.length - 1) {
      return false
    }
  }
  return true
}

export default canJump