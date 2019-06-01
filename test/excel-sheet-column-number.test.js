import titleToNumber from '../src/Number/excel-sheet-column-number.js'

test('case 1', () => {
  expect(titleToNumber('A')).toBe(1)
})


test('case 2', () => {
  expect(titleToNumber('AB')).toBe(28)
})


test('case 3', () => {
  expect(titleToNumber('ZY')).toBe(701)
})