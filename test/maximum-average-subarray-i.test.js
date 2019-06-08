import findMaxAverage from '../src/Array/maximum-average-subarray-i.js'

test('case 1', () => {
  expect(findMaxAverage([1,12,-5,-6,50,3], 4)).toBe(12.75)
})

test('case 2', () => {
  expect(findMaxAverage([0,1,1,3,3], 4)).toBe(2)
})
test('case 3', () => {
  expect(findMaxAverage([0,4,0,3,2], 1)).toBe(4)
})

