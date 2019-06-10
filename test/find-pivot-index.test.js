import pivotIndex from '../src/Array/find-pivot-index.js'

test('case 1', () => {
  expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3)
})


test('case 2', () => {
  expect(pivotIndex([1, 2, 3])).toBe(-1)
})


test('case 3', () => {
  expect(pivotIndex([-1,-1,-1,0,1,1])).toBe(0)
})

