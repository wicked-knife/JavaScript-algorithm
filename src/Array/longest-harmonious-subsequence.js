/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const map = {}
  let max = 0
  for(let i = 0; i < nums.length; i++) {
    map[ nums[i] ] = (map[ nums[i] ] | 0) + 1
  }
  for(let key in map) {
    let next = map[ key * 1 + 1 ] 
    if(next !== undefined) {
      let result = next + map[key]
      if(result > max) {
        max = result
      }
    }
  }

  return max
}

export default findLHS