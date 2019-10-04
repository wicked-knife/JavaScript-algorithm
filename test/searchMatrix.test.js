import searchMatrix from '../src/Array/search-a-2d-matrix'

test('case 1', () => {
  expect(searchMatrix([
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ], 3)).toBe(true)
})

test('case 2', () => {
  expect(searchMatrix([
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ], 13)).toBe(false)
})
