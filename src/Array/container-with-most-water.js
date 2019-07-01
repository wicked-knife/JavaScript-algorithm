/**
 * 参考官方解答，使用双指针。
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0, j = height.length - 1
  let area  = 0
  while(i < j) {
    if(height[i] >= height[j]) {
      area = Math.max( area, (j - i) * height[j] )
      j--
    } else {
      area = Math.max( area, (j - i) * height[i] )
      i++
    }
  }
  return area
}


export default maxArea