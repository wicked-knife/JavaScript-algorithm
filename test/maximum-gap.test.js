import maximumGap from '../src/Array/maximum-gap.js'

test('case 1', () => {
  expect(maximumGap([3,6,9,1])).toBe(3)
})

test('case 2', () => {
  expect(maximumGap([1])).toBe(0)
})

test('case 3', () => {
  expect(maximumGap([1, 100000])).toBe(99999)
})

