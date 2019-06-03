import isIsomorphic from '../src/String/isomorphic-stringsisomorphic-strings.js'

test('case 1', () => {
  expect(isIsomorphic('egg', 'add')).toBe(true)
})

test('case 2', () => {
  expect(isIsomorphic('foo', 'bar')).toBe(false)
})

test('case 3', () => {
  expect(isIsomorphic('paper', 'title')).toBe(true)
})

test('case 4', () => {
  expect(isIsomorphic('13', '42')).toBe(true)
})


