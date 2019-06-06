/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const map = {}
  const ret = []
  for(let i = 0 ; i < nums2.length; i++) {
    for(let j = i + 1; j < nums2.length; j++) {
      if(nums2[j] > nums2[i]) {
        map[ nums2[i] ] = nums2[j]
        break
      }
    }
  }
  for(let i = 0 ; i < nums1.length; i++) {
    ret.push( map[nums1[i]] ? map[nums1[i]] : -1)
  }
  return ret
}


export default nextGreaterElement