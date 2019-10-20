import kthSmallest from '../src/Array/kth-smallest-element-in-a-sorted-matrix'

test('case 1', () => {
  expect(kthSmallest([
    [ 1,  5,  9],
    [10, 11, 13],
    [12, 13, 15]
  ], 8)).toBe(13)
})
