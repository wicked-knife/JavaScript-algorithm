import binaryGap from '../src/String/binary-gap.js'

test('case 1', () => {
  expect(binaryGap(22)).toBe(2)
})


test('case 2', () => {
  expect(binaryGap(5)).toBe(2)
})


test('case 3', () => {
  expect(binaryGap(6)).toBe(1)
})


test('case 4', () => {
  expect(binaryGap(8)).toBe(0)
})
