import calPoints from '../src/Stack/baseball-game.js'

test('case 1', () => {
  expect(calPoints(['5','2','C','D','+'])).toBe(30)
})


test('case 2', () => {
  expect(calPoints(['5','-2','4','C','D','9','+','+'])).toBe(27)
})