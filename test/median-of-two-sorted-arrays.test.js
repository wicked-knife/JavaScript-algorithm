import findMedianSortedArrays from '../src/Array/median-of-two-sorted-arrays.js'

test('case 1', () => {
  expect(findMedianSortedArrays([1,3], [2])).toBe(2)
})

test('case 2', () => {
  expect(findMedianSortedArrays([1,2], [3,4])).toBe(2.5)
})

test('case 3', () => {
  expect(findMedianSortedArrays([1,3,6], [2,4,5])).toBe(3.5)
})

test('case 4', () => {
  expect(findMedianSortedArrays([1,6], [2,4,5])).toBe(4)
})

test('case 5', () => {
  expect(findMedianSortedArrays([1,2,3], [2,3,4])).toBe(2.5)
})