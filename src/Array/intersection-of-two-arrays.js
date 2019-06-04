/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  if(nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]
  }
  const ret = []
  for(let i = 0 ; i < nums1.length; i++) {
    nums2.includes( nums1[i] ) && !ret.includes(nums1[i]) && ret.push(nums1[i])
  }
  return ret
}

export default intersection