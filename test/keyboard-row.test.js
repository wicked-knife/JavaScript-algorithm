import findWords from '../src/String/keyboard-row.js'

test('case 1', () => {
  expect(findWords(['Hello', 'Alaska', 'Dad', 'Peace'])).toEqual([
    'Alaska',
    'Dad'
  ])
})
