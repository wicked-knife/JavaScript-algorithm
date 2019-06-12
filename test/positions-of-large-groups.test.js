import largeGroupPositions from '../src/String/positions-of-large-groups.js'

test('case 1', () => {
  expect(largeGroupPositions('abbxxxxzzy')).toEqual([[3,6]])
})


test('case 2', () => {
  expect(largeGroupPositions('abc')).toEqual([])
})


test('case 3', () => {
  expect(largeGroupPositions('abcdddeeeeaabbbcd')).toEqual([[3,5],[6,9],[12,14]])
})
