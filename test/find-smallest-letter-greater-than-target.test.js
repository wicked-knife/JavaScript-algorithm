import nextGreatestLetter from '../src/Array/find-smallest-letter-greater-than-target.js'

test('case 1', () => {
  expect(nextGreatestLetter(['c', 'f', 'j'], 'a')).toBe('c')
})


test('case 2', () => {
  expect(nextGreatestLetter(['c', 'f', 'j'], 'c')).toBe('f')
})

test('case 3', () => {
  expect(nextGreatestLetter(['c', 'f', 'j'], 'j')).toBe('c')
})

test('case 4', () => {
  expect(nextGreatestLetter(['c', 'f', 'j'], 'g')).toBe('j')
})
