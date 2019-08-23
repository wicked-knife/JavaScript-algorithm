import subsets from '../src/Array/subsets'

test('case 1', () => {
  expect(subsets([1,2,3])).toEqual([ [], [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ])
})
