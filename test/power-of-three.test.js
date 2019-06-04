import isPowerOfThree from '../src/Number/power-of-three.js'


test('case 1', () => {
  expect(isPowerOfThree(3)).toBe(true)
})

test('case 2', () => {
  expect(isPowerOfThree(6)).toBe(false)
})

test('case 3', () => {
  expect(isPowerOfThree(9)).toBe(true)
})
