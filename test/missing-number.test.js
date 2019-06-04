import missingNumber from '../src/Array/missing-number.js'

test('case 1', () => {
  expect(missingNumber([3,0,1])).toBe(2)
})


test('case 2', () => {
  expect(missingNumber([9,6,4,2,3,5,7,0,1])).toBe(8)
})

test('case 3', () => {
  expect(missingNumber([0])).toBe(1)
})
