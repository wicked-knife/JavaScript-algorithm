import shortestToChar from '../src/String/shortest-distance-to-a-character.js'

test('case 1', () => {
  expect(shortestToChar('loveleetcode', 'e')).toEqual([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0])
})
