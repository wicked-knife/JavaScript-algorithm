/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let prevMax = 0, max = 0
  for(let num of nums) {
    let temp = max
    max = Math.max(max, prevMax + num)
    prevMax = temp
  }
  return max
}

export default rob