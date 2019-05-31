/**
 * 
 * 摩尔投票算法可以快速的计算出一个数组中出现次数过半的数即大多数（majority），
 * 算法核心思想是同加，异减。
 * 
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let majority = nums[0]
  let count = 1
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] !== majority) {
      count--
      if(count < 0) {
        majority = nums[i]
        count = 1
      }
    } else {
      count++
    }
  }
  return majority
}

export default majorityElement