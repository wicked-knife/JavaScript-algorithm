import reverseOnlyLetters from '../src/String/reverse-only-letters.js'

test('case 1', () => {
  expect(reverseOnlyLetters('ab-cd')).toBe('dc-ba')
})

test('case 2', () => {
  expect(reverseOnlyLetters('a-bC-dEf-ghIj')).toBe('j-Ih-gfE-dCba')
})

test('case 3', () => {
  expect(reverseOnlyLetters('Test1ng-Leet=code-Q!')).toBe('Qedo1ct-eeLg=ntse-T!')
})

test('case 4', () => {
  expect(reverseOnlyLetters('')).toBe('')
})
