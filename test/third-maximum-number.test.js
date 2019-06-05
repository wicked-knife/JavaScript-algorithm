import thirdMax from '../src/Array/third-maximum-number.js'

test('case 1', () => {
  expect(thirdMax([3,2,1])).toBe(1)
})

test('case 2', () => {
  expect(thirdMax([2,1])).toBe(2)
})


test('case 3', () => {
  expect(thirdMax([2,2,1,3])).toBe(1)
})