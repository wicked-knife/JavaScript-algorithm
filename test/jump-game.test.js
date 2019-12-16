import canJump from '../src/Array/jump-game.js'

test('case 1', () => {
  expect(canJump( [2,3,1,1,4])).toBe(true)
})


test('case 2', () => {
  expect(canJump([3,2,1,0,4])).toBe(false)
})

test('case 3', () => {
  expect(canJump([2,0,0])).toBe(true)
})

test('case 4', () => {
  expect(canJump([1,1,2,2,0,1,1])).toBe(true)
})

test('case 5', () => {
  expect(canJump([2,0])).toBe(true)
})