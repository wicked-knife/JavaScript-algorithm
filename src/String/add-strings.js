/**
 * 模拟竖式加法
 * 给num1最前方添加一个0，防止进位
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let ret = ''
  let flag = 0
  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1]
  }
  num1 = 0 + num1
  num2 = num2.split('')
  for (let i = num1.length - 1; i >= 0; i--) {
    let result = num1[i] * 1 + (num2.pop() || 0) * 1 + flag
    if(result >= 10) {
      flag = 1
      ret = result % 10 + ret
    } else {
      flag = 0
      ret = result + ret
    }
  }
  return ret[0] === '0' ? ret.slice(1) : ret
}

export default addStrings
