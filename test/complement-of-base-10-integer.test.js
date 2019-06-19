import bitwiseComplement from '../src/Number/complement-of-base-10-integer.js'

test('case 1', () => {
  expect(bitwiseComplement(5)).toBe(2)
})

test('case 2', () => {
  expect(bitwiseComplement(7)).toBe(0)
})


test('case 3', () => {
  expect(bitwiseComplement(10)).toBe(5)
})
