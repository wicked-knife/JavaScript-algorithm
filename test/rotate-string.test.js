import rotateString from '../src/String/rotate-string.js'

test('case 1', () => {
  expect(rotateString('abcde', 'cdeab')).toBe(true)
})


test('case 2', () => {
  expect(rotateString('abcde', 'abced')).toBe(false)
})
