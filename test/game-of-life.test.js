import gameOfLife from '../src/Array/game-of-life.js'

test('case 1', () => {
  expect(gameOfLife([
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
  ])).toEqual([
    [0,0,0],
    [1,0,1],
    [0,1,1],
    [0,1,0]
  ])
})

test('case 2', () => {
  expect(gameOfLife([
    [1]
  ])).toEqual([
    [0]
  ])
})
