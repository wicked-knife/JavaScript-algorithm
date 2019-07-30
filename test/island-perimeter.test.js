import islandPerimeter from '../src/Array/island-perimeter'

test('case 1', () => {
  expect(islandPerimeter([[0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]])).toBe(16)
})
