import hasAlternatingBits from '../src/Number/binary-number-with-alternating-bits.js'

test('case 1', () => {
  expect(hasAlternatingBits(5)).toBe(true)
})


test('case 2', () => {
  expect(hasAlternatingBits(10)).toBe(true)
})


test('case 3', () => {
  expect(hasAlternatingBits(7)).toBe(false)
})


test('case 4', () => {
  expect(hasAlternatingBits(11)).toBe(false)
})