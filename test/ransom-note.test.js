import canConstruct from '../src/String/ransom-note.js'


test('case 1', () => {
  expect(canConstruct('a', 'b')).toBe(false)
})

test('case 2', () => {
  expect(canConstruct('aa', 'ab')).toBe(false)
})

test('case 3', () => {
  expect(canConstruct('aa', 'aab')).toBe(true)
})