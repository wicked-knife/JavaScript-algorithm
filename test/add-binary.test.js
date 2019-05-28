import addBinary from '../src/String/add-binary.js'


test('case 1', () => {
  expect(addBinary('11', '1')).toBe('100')
})

test('case 2', () => {
  expect(addBinary('1010', '1011')).toBe('10101')
})

test('case 3', () => {
  expect(addBinary('0', '0')).toBe('0')
})

test('case 4', () => {
  expect(addBinary('1111', '1111')).toBe('11110')
})

test('case 5', () => {
  expect(addBinary('1', '111')).toBe('1000')
})