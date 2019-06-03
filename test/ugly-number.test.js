import isUgly from '../src/Number/ugly-number.js'

test('case 1', () => {
  expect(isUgly(6)).toBe(true)
})

test('case 2', () => {
  expect(isUgly(8)).toBe(true)
})


test('case 3', () => {
  expect(isUgly(14)).toBe(false)
})