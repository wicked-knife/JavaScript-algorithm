import firstUniqChar from '../src/String/first-unique-character-in-a-string.js'

test('case 1', () => {
  expect(firstUniqChar('leetcode')).toBe(0)
})

test('case 2', () => {
  expect(firstUniqChar('loveleetcode')).toBe(2)
})

test('case 3', () => {
  expect(firstUniqChar('cc')).toBe(-1)
})