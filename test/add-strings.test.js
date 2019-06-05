import addStrings from '../src/String/add-strings.js'

test('case 1', () => {
  expect(addStrings('11', '19')).toBe('30')
})

test('case 2', () => {
  expect(addStrings('0', '0')).toBe('0')
})

test('case 3', () => {
  expect(addStrings('9333852702227987', '85731737104263')).toBe('9419584439332250')
})

test('case 4', () => {
  expect(addStrings('1', '9')).toBe('10')
})
