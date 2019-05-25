/**
 * 在排序的同时进行求差值
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  let len = nums.length
  if(len < 2) {return 0}
  let max = 0
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len - i; j++) {
      if(nums[j] > nums[j + 1]) {
        let temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
      }
    }
    if(i > 0) {
      let result = nums[len - i] - nums[len - i - 1]
      if(result > max) {
        max = result
      }
    }
  }
  return max
}



// /**
//  直接用sort方法其实更快...
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maximumGap = function(nums) {
//   if(nums.length < 2) {return 0}
//   let min = 0
//   const sorted = nums.sort((a, b) => a - b)
//   for(let i = 0; i < sorted.length - 1; i++) {
//     let result = sorted[i + 1] - sorted[i]
//     if(result > min) {
//       min = result
//     }
//   }
//   return min
// }

export default maximumGap