import sortArrayByParityII from '../src/Array/sort-array-by-parity-ii.js'

test('case 1', () => {
  expect(sortArrayByParityII([4, 2, 5, 7])).toEqual([4, 5, 2, 7])
})

test('case 2', () => {
  expect(sortArrayByParityII([3,6,4,2,5,7])).toEqual([6,3,4,5,2,7])
})
