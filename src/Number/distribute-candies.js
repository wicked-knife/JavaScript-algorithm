/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  const type = new Set(candies).size
  return candies.length / 2 > type ? type : candies.length / 2
}

export default distributeCandies