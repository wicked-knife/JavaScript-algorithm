import sortColors from '../src/Array/sort-colors'

test('case 1', () => {
  expect(sortColors([2,0,2,1,1,0])).toEqual([0,0,1,1,2,2])
})

test('case 2', () => {
  expect(sortColors([1,2,0])).toEqual([0,1,2])
})