import maxSubArray from '../src/Array/maximum-subarray.js'


test('case 1', () => {
  expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
})

test('case 2', () => {
  expect(maxSubArray([1,2])).toBe(3)
})