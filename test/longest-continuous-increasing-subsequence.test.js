import findLengthOfLCIS from '../src/Array/longest-continuous-increasing-subsequence.js'

test('case 1', () => {
  expect(findLengthOfLCIS([1,3,5,4,7])).toBe(3)
})


test('case 2', () => {
  expect(findLengthOfLCIS([2,2,2,2,2])).toBe(1)
})

test('case 3', () => {
  expect(findLengthOfLCIS([1,3,5,7])).toBe(4)
})