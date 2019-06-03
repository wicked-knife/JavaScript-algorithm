import isAnagram from '../src/String/valid-anagram.js'

test('case 1', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true)
})

test('case 2', () => {
  expect(isAnagram('rat', 'car')).toBe(false)
})

test('case 3', () => {
  expect(isAnagram('ab', 'a')).toBe(false)
})
