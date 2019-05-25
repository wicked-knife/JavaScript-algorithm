import repeatedSubstringPattern from '../src/String/repeated-substring-pattern.js'

test('case 1', () => {
  expect(repeatedSubstringPattern('abab')).toBe(true)
})

test('case 2', () => {
  expect(repeatedSubstringPattern('abcab')).toBe(false)
})

test('case 3', () => {
  expect(repeatedSubstringPattern('babbabbabbabbab')).toBe(true)
})

test('case 4', () => {
  expect(repeatedSubstringPattern('a')).toBe(false)
})