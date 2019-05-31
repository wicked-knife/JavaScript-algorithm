import convertToTitle from '../src/Number/excel-sheet-column-title.js'

test('case 1', () => {
  expect(convertToTitle(1)).toBe('A')
})

test('case 2', () => {
  expect(convertToTitle(28)).toBe('AB')
})

test('case 3', () => {
  expect(convertToTitle(701)).toBe('ZY')
})

test('case 4', () => {
  expect(convertToTitle(52)).toBe('AZ')
})