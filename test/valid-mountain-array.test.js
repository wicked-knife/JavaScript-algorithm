import validMountainArray from '../src/Array/valid-mountain-array.js'

test('case 1', () => {
  expect(validMountainArray([2,1])).toBe(false)
})

test('case 2', () => {
  expect(validMountainArray([3,5,5])).toBe(false)
})


test('case 3', () => {
  expect(validMountainArray([0,3,2,1])).toBe(true)
})
