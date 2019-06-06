import arrangeCoins from '../src/Number/arranging-coins.js'

test('case 1', () => {
  expect(arrangeCoins(5)).toBe(2)
})


test('case 2', () => {
  expect(arrangeCoins(8)).toBe(3)
})