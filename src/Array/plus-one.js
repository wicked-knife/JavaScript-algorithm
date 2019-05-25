/**
 * 防御式编程，为了防止边界情况（进位），往数组起始位置添加0
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits.unshift(0)
  for (let i = digits.length - 1; i >= 0; i--) {
    if(digits[i] === 9) {
      digits[i] = 0
    } else {
      digits[i]++
      break
    }
  }
  digits[0] === 0 && digits.shift()
  return dig
}

export default plusOne