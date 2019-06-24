import dominantIndex from '../src/Array/largest-number-at-least-twice-of-others.js'

test('case 1', () => {
  expect(dominantIndex([3, 6, 1, 0])).toBe(1)
})


test('case 2', () => {
  expect(dominantIndex([1,2,3,4])).toBe(-1)
})
