/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let begin = 0
  let end = nums.length - 1
  while(begin <= end) {
    const mid = Math.floor((end + begin) / 2)
    if(nums[mid] === target) {return mid}
    if(nums[mid] > target) {
      end = mid - 1
    }
    if(nums[mid] < target) {
      begin = mid + 1
    }
  }
  return -1
}
export default search