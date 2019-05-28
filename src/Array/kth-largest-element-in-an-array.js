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
    if(nums[i] > pivot) {
      r.push(nums[i])
      continue
    }
    if(nums[i] < pivot) {
      l.push(nums[i])
    }
  }
  if(r.length >= k) {
    return findKthLargest(r, k)
  }
  if(k > nums.length - l.length) {
    return findKthLargest(l, k - (nums.length - l.length))
  }
  return pivot
}
export default findKthLargest