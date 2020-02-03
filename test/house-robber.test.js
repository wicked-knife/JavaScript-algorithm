import rob from '../src/Array/house-robber.js'

test('case 1', () => {
  expect(rob([1,2,3,1])).toBe(4)
})


test('case 2', () => {
  expect(rob([2,7,9,3,1])).toBe(12)
})

test('case 3', () => {
  expect(rob([2,7,4,3,1])).toBe(10)
})
