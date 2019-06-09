import findShortestSubArray from '../src/Array/degree-of-an-array.js'

test('case 1', () => {
  expect(findShortestSubArray([1, 2, 2, 3, 1])).toBe(2)
})


test('case 2', () => {
  expect(findShortestSubArray([1,2,2,3,1,4,2])).toBe(6)
})
