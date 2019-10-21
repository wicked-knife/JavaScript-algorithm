import minMoves2 from '../src/Array/minimum-moves-to-equal-array-elements-ii'

test('case 1', () => {
  expect(minMoves2([1,2,3])).toBe(2)
})

test('case 2', () => {
  expect(minMoves2([1,2,2,3])).toBe(2)
})

test('case 3', () => {
  expect(minMoves2([1,0,0,8,6])).toBe(14)
})
