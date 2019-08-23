/**
 * @param {number[]} nums
 * @return {number[][]}
 * 用递归
 */
var subsets = function(nums) {
  const result = [[]]
  const stop = nums[nums.length - 1]


  function getCombine(_nums, _arr){
    if(_nums[_nums.length - 1] === stop || _arr.length === 0) {
      return _arr
    }
    const _result = []

    for(let i = 0; i < _arr.length; i++) {
      const _index = nums.indexOf(_arr[i])
      _result.push([..._nums, _arr[i]])
      _result.push(...getCombine([..._nums, _arr[i]], nums.slice(_index + 1)))
    }
    return _result
  }

  for(let i = 0 ; i < nums.length; i++) {
    result.push([nums[i]])
    result.push(...getCombine([nums[i]], nums.slice(i + 1)))
  }



  return result
}

export default subsets