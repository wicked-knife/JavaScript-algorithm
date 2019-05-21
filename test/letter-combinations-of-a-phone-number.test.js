import letterCombinations from '../src/Array/letter-combinations-of-a-phone-number.js'

test('case 1', () => {
  expect(letterCombinations('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})

test('case 2', () => {
  expect(letterCombinations('')).toEqual([])
})