import judgeCircle from '../src/String/robot-return-to-origin.js'

test('case 1', () => {
  expect(judgeCircle('LL')).toBe(false)
})


test('case 2', () => {
  expect(judgeCircle('UD')).toBe(true)
})