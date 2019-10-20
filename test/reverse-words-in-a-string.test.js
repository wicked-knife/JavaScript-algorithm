import reverseWords from '../src/String/reverse-words-in-a-string'

test('case 1', () => {
  expect(reverseWords('the sky is blue')).toBe('blue is sky the')
})

test('case 2', () => {
  expect(reverseWords('  hello world!  ')).toBe('world! hello')
})

test('case 3', () => {
  expect(reverseWords('a good   example')).toBe('example good a')
})
