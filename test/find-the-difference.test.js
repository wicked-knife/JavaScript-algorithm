import findTheDifference from '../src/String/find-the-difference.js'


test('case 1', () => {
  expect(findTheDifference('abcd', 'abcde')).toBe('e')
})

test('case 1', () => {
  expect(findTheDifference('a', 'aa')).toBe('a')
})