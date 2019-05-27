/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const pivotIndex = Math.floor(Math.random() * nums.length)
  const pivot = nums[pivotIndex]
  const l = []
  const r = []
  for(let i = 0; i < nums.length; i++) {
    nums[i] <= pivot ? l.push(nums[i]) : r.push(nums[i])
  }
  if(r.length === k) {
    return r[0]
  }
  if(r.length > k) {
    return findKthLargest(r, k)
  }
  if(k > r.length) {
    return findKthLargest(l, k - r.length)
  }
}
export default findKthLargest