import {reverseWords, reverseWords2} from '../src/String/reverse-words.js'

test('case 1', () => {
  expect(reverseWords('Let\'s take LeetCode contest')).toBe('s\'teL ekat edoCteeL tsetnoc')
})


test('case 2', () => {
  expect(reverseWords2('Let\'s take LeetCode contest')).toBe('s\'teL ekat edoCteeL tsetnoc')
})
