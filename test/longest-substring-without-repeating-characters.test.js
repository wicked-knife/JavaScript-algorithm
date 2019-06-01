import lengthOfLongestSubstring from '../src/String/longest-substring-without-repeating-characters.js'

test('case 1', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
})

test('case 2', () => {
  expect(lengthOfLongestSubstring('bbbbbbb')).toBe(1)
})

test('case 3', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
})

test('case 4', () => {
  expect(lengthOfLongestSubstring('dvdf')).toBe(3)
})

test('case 5', () => {
  expect(lengthOfLongestSubstring('dabvdf')).toBe(5)
})
