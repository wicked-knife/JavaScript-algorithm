import search from '../src/Array/binary-search.js'

test('case 1', () => {
  expect(search([-1,0,3,5,9,12], 2)).toBe(-1)
})


test('case 2', () => {
  expect(search([-1,0,3,5,9,12], 9)).toBe(4)
})


test('case 3', () => {
  expect(search([-1,0,3,5,9], 5)).toBe(3)
})
