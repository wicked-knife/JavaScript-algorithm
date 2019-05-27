import findKthLargest from '../src/Array/kth-largest-element-in-an-array.js'

test('case 1', () => {
  expect(findKthLargest([3,2,1,5,6,4], 2)).toBe(5)
})

test('case 2', () => {
  expect(findKthLargest([99,99], 1)).toBe(99)
})

test('case 3', () => {
  expect(findKthLargest([2,2,3,5], 3)).toBe(2)
})