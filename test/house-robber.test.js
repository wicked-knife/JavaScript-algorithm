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

test('case 4', () => {
  expect(rob([0,0])).toBe(0)
})

test('case 5', () => {
  expect(rob([1])).toBe(1)
})