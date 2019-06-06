import compress from '../src/Array/string-compression.js'

test('case 1', () => {
  expect(compress(['a','a','b','b','c','c','c'])).toBe(6)
})


test('case 2', () => {
  expect(compress(['a'])).toBe(1)
})

test('case 3', () => {
  expect(compress(['a','b','b','b','b','b','b','b','b','b','b','b','b'])).toBe(4)
})
