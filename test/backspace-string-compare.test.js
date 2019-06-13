import backspaceCompare from '../src/String/backspace-string-compare.js'

test('case 1', () => {
  expect(backspaceCompare('ab#c', 'ad#c')).toBe(true)
})


test('case 2', () => {
  expect(backspaceCompare('ab##', 'c#d#')).toBe(true)
})

test('case 3', () => {
  expect(backspaceCompare('a##c', '#a#c')).toBe(true)
})


test('case 4', () => {
  expect(backspaceCompare('a#c', 'b')).toBe(false)
})
