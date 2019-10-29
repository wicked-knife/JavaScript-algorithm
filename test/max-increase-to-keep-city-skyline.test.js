import maxIncreaseKeepingSkyline from '../src//Array/max-increase-to-keep-city-skyline'

test('case 1', () => {
  expect(
    maxIncreaseKeepingSkyline([
      [3, 0, 8, 4],
      [2, 4, 5, 7],
      [9, 2, 6, 3],
      [0, 3, 1, 0]
    ])
  ).toBe(35)
})
