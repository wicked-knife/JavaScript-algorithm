import isSubsequence from '../src/String/is-subsequence'

test('case 1', () => {
  expect(isSubsequence('abc', 'ahbgdc')).toBe(true)
})
