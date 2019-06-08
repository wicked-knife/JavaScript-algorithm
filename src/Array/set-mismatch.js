/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const set = new Set()
  let err
  let miss
  for(let i = 0; i < nums.length; i++) {
    if(set.has( nums[i] )) {
      err = nums[i]
    } else {
      set.add(nums[i])
    }
  }
  for(let i = 0; i < nums.length; i++) {
    if(!set.has(i + 1)) {
      miss = i + 1
    }
  }
  return [err, miss]
}

export default findErrorNums