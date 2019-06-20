import removeOuterParentheses from '../src/Stack/remove-outermost-parentheses'

test('case 1', () => {
  expect(removeOuterParentheses('(()())(())')).toBe('()()()')
})


test('case 2', () => {
  expect(removeOuterParentheses('(()())(())(()(()))')).toBe('()()()()(())')
})


test('case 3', () => {
  expect(removeOuterParentheses('()()')).toBe('')
})