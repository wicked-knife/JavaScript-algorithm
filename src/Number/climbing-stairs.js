/**
 * 阶乘
 * @param {Number} n
 * @returns {Number}
 */
function factorial (n) {
  if(n < 2) {return n}
  return n * factorial(n -1)
}

/**
 *
 * 排列组合， m为底
 * @param {Numer} m
 * @param {Number} n
 * @returns
 */
function C(m, n) {
  return factorial(m) / (factorial(n) * factorial(m - n))
}


/**
 * 主要使用递归
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const max = Math.floor(n / 2)
  let sum = 1
  for(let c = 1; c <= max; c++) {
    let count1 = n - c * 2
    count1 ? sum += C(count1 + c, c) : sum += 1
  }
  return sum
}

export default climbStairs