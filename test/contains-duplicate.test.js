import containsDuplicate from '../src/Array/contains-duplicate.js'

test('case 1', () => {
  expect(containsDuplicate([1,2,3,4,1])).toBe(true)
})


test('case 2', () => {
  expect(containsDuplicate([1,2,3,4])).toBe(false)
})
