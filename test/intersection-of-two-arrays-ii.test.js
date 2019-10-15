import intersect from '../src/Array/intersection-of-two-arrays-ii'

test('case 1', () => {
  expect(intersect([1,2,2,1], [2,2])).toEqual([2,2])
})



test('case 2', () => {
  expect(intersect([4,9,5], [9,4,9,8,4])).toEqual([4,9])
})
