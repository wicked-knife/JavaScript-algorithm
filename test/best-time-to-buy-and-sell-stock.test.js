import maxProfit from '../src/Array/best-time-to-buy-and-sell-stock.js'


test('case 1', () => {
  expect(maxProfit([7,1,5,3,6,4])).toBe(5)
})

test('case 2', () => {
  expect(maxProfit([7,6,5,4,3,2])).toBe(0)
})
