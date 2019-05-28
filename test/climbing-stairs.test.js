import climbStairs from '../src/Number/climbing-stairs.js'

test('case 1 ', () => {
  expect(climbStairs(3)).toBe(3)
})

test('case 2 ', () => {
  expect(climbStairs(2)).toBe(2)
})

test('case 3 ', () => {
  expect(climbStairs(4)).toBe(5)
})

test('case 4 ', () => {
  expect(climbStairs(5)).toBe(8)
})