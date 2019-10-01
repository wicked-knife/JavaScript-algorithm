/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if(nums.length <= 1) {
    return [nums]
  }
  let acc = [ [nums[0]] ]
  for(let i = 1; i < nums.length; i++) {
    const _arr = []
    for(let m = 0; m < acc.length; m++) {
      for(let n = 0; n <= acc[m].length; n++) {
        const temp = acc[m].slice()
        temp.splice(n, 0, nums[i])
        _arr.push(temp)
      }
    }
    acc = _arr
  }
  return acc
}

export default permute