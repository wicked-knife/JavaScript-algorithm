import isHappy from '../src/Number/happy-number.js'

test('case 1', () => {
  expect(isHappy(19)).toBe(true)
})


test('case 1', () => {
  expect(isHappy(18)).toBe(false)
})
