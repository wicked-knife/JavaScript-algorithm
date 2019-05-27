import findKthLargest from '../src/Array/kth-largest-element-in-an-array.js'

test('case 1', () => {
  expect(findKthLargest([3,2,1,5,6,4], 2)).toBe(5)
})