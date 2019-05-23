/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * 防御式编程思想：在 flowerbed 数组两端各增加一个 0， 
 * 这样处理的好处在于不用考虑边界条件，任意位置处只要出现三个连续 0 就可以栽上一棵花
 */
var canPlaceFlowers = function (flowerbed, n) {
  flowerbed.push(0)
  flowerbed.unshift(0)
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (flowerbed[i + 1] === 1) {
        i++
        continue
      }
      if (flowerbed[i + 1] === 0) {
        if (flowerbed[i + 2] === 0) {
          n--
          i++
          continue
        }
        if (flowerbed[i + 2] === 1) {
          i++
          continue
        }
      }
    }
  }
  return n <= 0
}

export default canPlaceFlowers