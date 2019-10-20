/**
 * @param {number[]} nums
 * @return {number}
 *  n-1个数同时加一，就好比每次有一个数自身减一，因为只能做减法，所以数组最后的数只能是最小值。这样的话每个元素减去最小值求其和就是答案。
 */
var minMoves = function(nums) {
  const min = Math.min(...nums)
  return nums.reduce((acc, cur) => acc += cur - min, 0)
}


export default minMoves