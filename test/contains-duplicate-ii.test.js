import containsNearbyDuplicate from '../src/Array/contains-duplicate-ii.js'

test('case 1', () => {
  expect(containsNearbyDuplicate([1,2,3,1], 3)).toBe(true)
})

test('case 2', () => {
  expect(containsNearbyDuplicate([1,0,1,1], 1)).toBe(true)
})

test('case 3', () => {
  expect(containsNearbyDuplicate([1,2,3,1,2,3], 2)).toBe(false)
})

test('case 4', () => {
  expect(containsNearbyDuplicate([99, 99], 2)).toBe(true)
})
