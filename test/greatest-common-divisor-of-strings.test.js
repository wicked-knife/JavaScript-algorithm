import gcdOfStrings from '../src/String/greatest-common-divisor-of-strings.js'

test('case 1', () => {
  expect(gcdOfStrings('ABCABC', 'ABC')).toBe('ABC')
})

test('case 2', () => {
  expect(gcdOfStrings('ABABAB', 'AB')).toBe('AB')
})


test('case 2', () => {
  expect(gcdOfStrings('LEET', 'CODE')).toBe('')
})

test('case 4', () => {
  expect(gcdOfStrings('AB', 'ABABAB')).toBe('AB')
})

test('case 5', () => {
  expect(gcdOfStrings('ABABAB', 'ABAB')).toBe('AB')
})
