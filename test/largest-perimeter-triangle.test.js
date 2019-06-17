import largestPerimeter from '../src/Number/largest-perimeter-triangle.js'

test('case 1', () => {
  expect(largestPerimeter([2,1,2])).toBe(5)
})


test('case 2', () => {
  expect(largestPerimeter([1,2,1])).toBe(0)
})


test('case 3', () => {
  expect(largestPerimeter([3,2,3,4])).toBe(10)
})


test('case 4', () => {
  expect(largestPerimeter([3,6,2,3])).toBe(8)
})