import repeatedStringMatch from '../src/String/repeated-string-match.js'

test('case 1', () => {
  expect(repeatedStringMatch('abcd', 'cdabcdab')).toBe(3)
})

test('case 2', () => {
  expect(repeatedStringMatch('aaaaaaaaaaaaaaaaaaaaaab', 'ba')).toBe(2)
})

test('case 3', () => {
  expect(repeatedStringMatch('a', 'a')).toBe(1)
})


test('case 4', () => {
  expect(repeatedStringMatch('aa', 'a')).toBe(1)
})