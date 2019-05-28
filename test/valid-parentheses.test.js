import isValid from '../src/String/valid-parentheses.js'

test('case 1', () => {
  expect(isValid('()')).toBe(true)
})

test('case 2', () => {
  expect(isValid('()[]{}')).toBe(true)
})

test('case 3', () => {
  expect(isValid('(]')).toBe(false)
})

test('case 4', () => {
  expect(isValid('([)]')).toBe(false)
})

test('case 5', () => {
  expect(isValid('{[]}')).toBe(true)
})

test('case 6', () => {
  expect(isValid('[({(())}[()])]')).toBe(true)
})

test('case 7', () => {
  expect(isValid('(')).toBe(false)
})

test('case 8', () => {
  expect(isValid('')).toBe(true)
})
