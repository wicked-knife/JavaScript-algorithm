import reverseVowels from '../src/String/reverse-vowels-of-a-string.js'

test('case 1', () => {
  expect(reverseVowels('hello')).toBe('holle')
})

test('case 2', () => {
  expect(reverseVowels('leetcode')).toBe('leotcede')
})
