import maxArea from '../src/Array/container-with-most-water.js'

test('case 1', () => {
  expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49)
})


test('case 2', () => {
  expect(maxArea([1,2,1])).toBe(2)
})