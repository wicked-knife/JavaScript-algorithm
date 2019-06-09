import validPalindrome from '../src/String/valid-palindrome-ii.js'

test('case 1', () => {
  expect(validPalindrome('aba')).toBe(true)
})

test('case 2', () => {
  expect(validPalindrome('abca')).toBe(true)
})

test('case 3', () => {
  expect(validPalindrome('abc')).toBe(false)
})

test('case 4', () => {
  expect(validPalindrome('cbbcc')).toBe(true)
})