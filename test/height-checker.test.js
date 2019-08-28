import heightChecker from '../src/Array/height-checker.js'

test('case 1', () => {
  expect(heightChecker([1,1,4,2,1,3])).toBe(3)
})
