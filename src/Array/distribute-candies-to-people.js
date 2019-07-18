/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  const ret = Array(num_people).fill(0, 0, num_people)
  let initialCandy = 1
  let index = 0
  while(candies > 0) {
    ret[index] += Math.min(candies, initialCandy)
    candies -= initialCandy
    index++
    initialCandy++
    if(index === num_people) {
      index = 0
    }
  }
  return ret
}

export default distributeCandies