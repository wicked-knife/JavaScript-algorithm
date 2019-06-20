import isRobotBounded from '../src/String/robot-bounded-in-circle.js'

test('case 1', () => {
  expect(isRobotBounded('GGLLGG')).toBe(true)
})

test('case 2', () => {
  expect(isRobotBounded('GG')).toBe(false)
})


test('case 3', () => {
  expect(isRobotBounded('GL')).toBe(true)
})


