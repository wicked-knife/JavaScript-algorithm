import isPowerOfTwo from '../src/Number/power-of-two.js'

test('case 1', () => {
  expect(isPowerOfTwo(1)).toBe(true)
})

test('case 2', () => {
  expect(isPowerOfTwo(16)).toBe(true)
})

test('case 2', () => {
  expect(isPowerOfTwo(218)).toBe(false)
})
