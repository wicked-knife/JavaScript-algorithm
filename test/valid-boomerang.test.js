import isBoomerang from '../src/Number/valid-boomerang.JS'

test('case 1', () => {
  expect(isBoomerang([[1,1],[2,3],[3,2]])).toBe(true)
})


test('case 2', () => {
  expect(isBoomerang([[1,1],[2,2],[3,3]])).toBe(false)
})


test('case 3', () => {
  expect(isBoomerang([[0,0],[1,1],[1,1]])).toBe(false)
})


test('case 4', () => {
  expect(isBoomerang([[1,0],[1,1],[1,0]])).toBe(false)
})


test('case 5', () => {
  expect(isBoomerang([[0,0],[0,2],[2,1]])).toBe(true)
})
