/**
 * 利用 1+3+5+7+9+…+(2n-1)=n^2，即完全平方数肯定是前n个连续奇数的和
* @param {number} num
* @return {boolean}
*/
var isPerfectSquare = function(num) {
  let n = 1
  let ret = n
  while(ret < num) {
    ret += n += 2
  }
  return ret === num
}

export default isPerfectSquare