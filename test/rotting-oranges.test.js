import orangesRotting from '../src/Array/rotting-oranges.js'

test('case 1', () => {
  expect(orangesRotting([[2,1,1],[0,1,1],[1,0,1]])).toBe(-1)
})


test('case 2', () => {
  expect(orangesRotting([[0,2]])).toBe(0)
})


test('case 3', () => {
  expect(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])).toBe(4)
})