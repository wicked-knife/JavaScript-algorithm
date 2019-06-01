import firstMissingPositive from '../src/Array/first-missing-positive.js'

test('case 1', () => {
  expect(firstMissingPositive([2,4,3,5])).toBe(1)
})


test('case 2', () => {
  expect(firstMissingPositive([1,2,0])).toBe(3)
})


test('case 3', () => {
  expect(firstMissingPositive([3,4,-1,1])).toBe(2)
})


test('case 4', () => {
  expect(firstMissingPositive([7,8,9,11,12])).toBe(1)
})

test('case 5', () => {
  expect(firstMissingPositive([])).toBe(1)
})