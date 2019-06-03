/**
 * 厄拉多塞素数筛选法
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if(n < 2) {return 0}
  let nums = [0, 1]
  let count = []
  for(let i = 2; i <= n; i++) {
    nums.push(i)
  }
  for(let i = 2; i < nums.length; i++) {
    if(nums[i] !== 0) {
      for(let j = i * 2 ; j < nums.length; j += nums[i]) {
        if(nums[j] !== 0 && nums[j] % nums[i] === 0) {nums[j] = 0}
      }
      nums[i] < n && count.push( nums[i] )
    }
  }
  return count.length
}



export default countPrimes