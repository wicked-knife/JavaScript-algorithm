import distributeCandies from '../src/Number/distribute-candies.js'

test('case 1', () => {
  expect(distributeCandies([1,1,2,2,3,3])).toBe(3)
})

test('case 2', () => {
  expect(distributeCandies([1,1,2,3])).toBe(2)
})
