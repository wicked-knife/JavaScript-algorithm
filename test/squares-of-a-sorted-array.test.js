import sortedSquares from '../src/Array/squares-of-a-sorted-array.js'

test('case 1', () => {
  expect(sortedSquares([-7,-3,2,3,11])).toEqual([4,9,9,49,121])
})
