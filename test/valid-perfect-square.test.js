import isPerfectSquare from '../src/Number/valid-perfect-square.js'

test('case 1', () => {
  expect(isPerfectSquare(25)).toBe(true)
})

test('case 2', () => {
  expect(isPerfectSquare(14)).toBe(false)
})
