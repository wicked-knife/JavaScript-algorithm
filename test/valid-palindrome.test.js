import isPalindrome from '../src/String/valid-palindrome.js'

test('case 1', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
})

test('case 2', () => {
  expect(isPalindrome('race a car')).toBe(false)
})
