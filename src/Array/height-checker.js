/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const sorted = heights.slice().sort((a,b) => a - b)
  let ret = 0
  for(let i = 0; i < sorted.length; i++) {
    if(sorted[i] !== heights[i]) {
      ret++
    }
  }
  return ret
}

export default heightChecker