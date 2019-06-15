import sortArrayByParity from '../src/Array/sort-array-by-parity.js'

test('case 1', () => {
  expect(sortArrayByParity([3,1,2,4])).toEqual([4,2,3,1])
})
