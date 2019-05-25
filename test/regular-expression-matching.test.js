import isMatch from '../src/String/regular-expression-matching.js'

test('case 1', () => {
  expect(isMatch('aa', 'a')).toBe(false)
})

test('case 2', () => {
  expect(isMatch('aa', 'a*')).toBe(true)
})

test('case 3', () => {
  expect(isMatch('ab', '.*')).toBe(true)
})

test('case 4', () => {
  expect(isMatch('aab', 'c*a*b')).toBe(true)
})

test('case 5', () => {
  expect(isMatch('mississippi', 'mis*is*p*.')).toBe(false)
})