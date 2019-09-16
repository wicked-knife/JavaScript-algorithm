import maxNumberOfBalloons from '../src/String/maximum-number-of-balloons'

test('case 1', () => {
  expect(maxNumberOfBalloons('nlaebolko')).toBe(1)
})


test('case 2', () => {
  expect(maxNumberOfBalloons('loonbalxballpoon')).toBe(2)
})


test('case 3', () => {
  expect(maxNumberOfBalloons('leetcode')).toBe(0)
})
