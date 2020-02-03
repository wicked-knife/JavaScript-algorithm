/**
 * f(1) = A1
 * f(2) = Max(A1, A2)
 * f(3) = Max( f(2), A3 + f(1) )
 * f(4) = Max( f(3), A4 + f(2) )
 * => f(n) = Max( f(n - 1), An + f(n - 2) )
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(!nums.length) {
    return 0
  }
  const dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1] || 0)
  for(let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
  }
  return dp.pop()
}


export default rob