import mostCommonWord from '../src/String/most-common-word.js'

test('case 1', () => {
  expect(mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'])).toBe('ball')
})


test('case 2', () => {
  expect(mostCommonWord('a, a, a, a, b,b,b,c, c', ['a'])).toBe('b')
})
