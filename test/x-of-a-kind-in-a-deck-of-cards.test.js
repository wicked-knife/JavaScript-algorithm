import hasGroupsSizeX from '../src/Array/x-of-a-kind-in-a-deck-of-cards.js'

test('case 1', () => {
  expect(hasGroupsSizeX([1,1,2,2,2,2])).toBe(true)
})

test('case 2', () => {
  expect(hasGroupsSizeX([1,1,1,2,2,2,3,3])).toBe(false)
})
  
test('case 3', () => {
  expect(hasGroupsSizeX([1])).toBe(false)
})

test('case 4', () => {
  expect(hasGroupsSizeX([1, 1])).toBe(true)
})

test('case 5', () => {
  expect(hasGroupsSizeX([1,2,3,4,4,3,2,1])).toBe(true)
})

test('case 6', () => {
  expect(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2])).toBe(true)
})

