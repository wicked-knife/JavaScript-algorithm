/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const map = {}
  let max = Math.max(...nums)
  for(let i = 0 ; i < nums.length; i++) {
    map[ nums[i] ] = i
  }
  debugger
  for(let n = max ; n > 0; n--) {
    let result = n - 1
    if(map[result] === undefined) {
      return result
    }
  }
  return max + 1
}

export default missingNumber