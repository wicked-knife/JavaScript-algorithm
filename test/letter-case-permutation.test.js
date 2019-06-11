import letterCasePermutation from '../src/String/letter-case-permutation.js'

test('case 1', () => {
  expect(letterCasePermutation('a1b2')).toEqual(['a1b2', 'A1b2','a1B2', 'A1B2'])
})

test('case 2', () => {
  expect(letterCasePermutation('3z4')).toEqual(['3z4', '3Z4'])
})

test('case 3', () => {
  expect(letterCasePermutation('12345')).toEqual(['12345'])
})
