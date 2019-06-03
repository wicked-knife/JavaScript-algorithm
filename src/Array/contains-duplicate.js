/**
 * @param {number[]} nums
 * @return {boolean}
 */

// var containsDuplicate = function(nums) {
//   let memory = {}
//   for (let i = 0; i < nums.length; i++) {
//     if (memory[ nums[i] ] === undefined) {
//       memory[nums[i]] = nums[i]
//     } else {
//       return true
//     }
//   }
//   return false
// }

var containsDuplicate = function(nums) {
  return nums.length !== new Set(nums).size
}

export default containsDuplicate
