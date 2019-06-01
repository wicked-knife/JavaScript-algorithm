/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const hash = []
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > 0) {
      hash[ nums[i] ] = nums[i]
    }
  }
  if(!hash.length) {return 1} 
  for(let i = 1; i < hash.length; i++) {
    if(!hash[i]) {
      return i
    }
  }
  return hash.pop() + 1
}
export default firstMissingPositive