/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const sorted = []
  if(nums1.length > nums2.length) {
    [nums2, nums1] = [nums1, nums2]
  }
  const times = nums1.length + nums2.length
  for(let i = 0; i < times; i++) {
    if(nums1[0] < nums2[0]) {
      sorted.push(nums1.shift())
    }
    if(nums1[0] === nums2[0]) {
      sorted.push(nums1.shift(), nums2.shift())
    }
    if(nums1[0] > nums2[0]){
      sorted.push(nums2.shift())
    }
    if(!nums1.length) {
      sorted.push(...nums2)
      break
    }
    if(!nums2.length) {
      sorted.push(...nums1)
      break
    }
  }
  const len = sorted.length
  return sorted.length % 2 === 0 ? (sorted[(len / 2) - 1] + sorted[len / 2]) / 2 : sorted[len / 2 - 0.5]
}

export default findMedianSortedArrays