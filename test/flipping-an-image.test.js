import flipAndInvertImage from '../src/Array/flipping-an-image.js'

test('case 1', () => {
  expect(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])).toEqual([[1,0,0],[0,1,0],[1,1,1]])
})


test('case 2', () => {
  expect(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])).toEqual([[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]])
})
