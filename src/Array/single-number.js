/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const count = {}
  for(let i = 0; i < nums.length; i++) {
    if(count[ nums[i] ] === undefined) {
      count[ nums[i] ] = 0
    }
    count[ nums[i] ]++
  }
  for(let number in count) {
    if(count.hasOwnProperty(number) && count[number] === 1) {
      return Number(number)
    }
  }
}

export default singleNumber