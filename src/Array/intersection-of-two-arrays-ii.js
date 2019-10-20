/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  return nums1.filter(n => nums2.includes(n) && nums2.splice(nums2.indexOf(n), 1))
}

export default intersect