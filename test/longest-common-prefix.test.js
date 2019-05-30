import longestCommonPrefix  from '../src/String/longest-common-prefix.js'

test('case 1', () => {
  expect(longestCommonPrefix(['flower','flow','flight'])).toBe('fl')
})

test('case 2', () => {
  expect(longestCommonPrefix(['dog','racecar','car'])).toBe('')
})
