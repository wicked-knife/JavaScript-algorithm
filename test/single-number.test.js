import singleNumber from '../src/Array/single-number.js'

test('case 1', () => {
  expect(singleNumber([2,2,1])).toBe(1)
})


test('case 2', () => {
  expect(singleNumber([4,1,2,1,2])).toBe(4)
})