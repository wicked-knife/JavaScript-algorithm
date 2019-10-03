import generateMatrix from '../src/Array/spiral-matrix-ii'

test('case 1', () => {
  expect(generateMatrix(3)).toEqual([
    [ 1, 2, 3 ],
    [ 8, 9, 4 ],
    [ 7, 6, 5 ]
  ])
})
