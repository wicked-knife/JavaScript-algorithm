import distributeCandies from '../src/Array/distribute-candies-to-people.js'

test('case 1', () => {
  expect(distributeCandies(7,4)).toEqual([1,2,3,1])
})

test('case 2', () => {
  expect(distributeCandies(10,3)).toEqual([5,2,3])
})
