/**
 * 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0]
  let profit = 0
  for(let i = 0; i < prices.length; i++) {
    if(prices[i] < min) {
      min = prices[i]
      continue
    }
    if(prices[i] > min) {
      let temp = prices[i] - min
      if(temp > profit) {
        profit = temp
      }
    }
  }
  return profit
}

export default maxProfit
