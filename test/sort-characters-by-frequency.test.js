import frequencySort from '../src/String/sort-characters-by-frequency'

test('case 1', () => {
  expect(frequencySort('tree')).toBe('eetr')
})


test('case 2', () => {
  expect(frequencySort('cccaaa')).toBe('cccaaa')
})

test('case 3', () => {
  expect(frequencySort('Aabb')).toBe('bbAa')
})
