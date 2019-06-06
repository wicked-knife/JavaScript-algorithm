import detectCapitalUse from '../src/String/detect-capital.js'

test('case 1', () => {
  expect(detectCapitalUse('USA')).toBe(true)
})


test('case 2', () => {
  expect(detectCapitalUse('FlaG')).toBe(false)
})