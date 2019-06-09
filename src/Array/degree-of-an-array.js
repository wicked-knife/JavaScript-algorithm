/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const map = {}
  let degree = 0
  let a = []
  let min = nums.length
  for(let i = 0; i < nums.length; i++) {
    map[ nums[i] ] = (map[ nums[i] ] || 0) + 1
  }
  for(let key in map) {
    if( map[key] > degree ) {
      degree = map[key]
      a = []
      a.push(key * 1)
    }
    if(map[key] === degree) {
      a.push(key * 1)
    }
  }
  if(degree === 1) {return 1}
  for(let i = 0 ; i < a.length; i++) {
    min = Math.min( nums.slice( nums.indexOf(a[i]), nums.lastIndexOf(a[i]) + 1 ).length, min )
  }
  return min
}

export default findShortestSubArray