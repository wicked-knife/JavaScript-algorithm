import permute from '../src/Array/permute'

test('case 1', () => {
  expect(permute([1,2,3])).toEqual(
    [ [ 3, 2, 1 ],
      [ 2, 3, 1 ],
      [ 2, 1, 3 ],
      [ 3, 1, 2 ],
      [ 1, 3, 2 ],
      [ 1, 2, 3 ] ]
  )
})