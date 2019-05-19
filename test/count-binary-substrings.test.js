import {countBinarySubstrings} from '../src/String/count-binary-substrings.js'

test('case 1', () => {
  expect(countBinarySubstrings('00110011')).toBe(6)
})


test('case 2', () => {
  expect(countBinarySubstrings('10101')).toBe(4)
})

test('case 3', () => {
  expect(countBinarySubstrings('00110')).toBe(3)
})
