/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const map = {}
  debugger
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    if (map[n] === undefined) {
      map[n] = [i]
    } else {
      if( i - map[n][0] <= k) {
        return true
      } else {
        map[n] = [i]
      }
    }
  }
  return false
}

export default containsNearbyDuplicate
