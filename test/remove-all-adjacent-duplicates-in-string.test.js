import removeDuplicates from '../src/String/remove-all-adjacent-duplicates-in-string.js'

test('case 0', () => {
  expect(removeDuplicates('abbaca')).toBe('ca')
})

test('case 1', () => {
  expect(removeDuplicates('abbbaca')).toBe('abaca')
})

test('case 2', () => {
  expect(removeDuplicates('bbbbaca')).toBe('aca')
})

test('case 3', () => {
  expect(removeDuplicates('azxxzy')).toBe('ay')
})