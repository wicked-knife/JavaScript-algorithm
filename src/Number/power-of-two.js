/**
 * 2的任意次幂转为二进制第一位是1，其余位是0
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return n.toString(2).lastIndexOf('1') === 0
}

export default isPowerOfTwo