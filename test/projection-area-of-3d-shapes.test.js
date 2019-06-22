import projectionArea from '../src/Array/projection-area-of-3d-shapes.js'


test('case 1', () => {
  expect(projectionArea([[2]])).toBe(5)
})

test('case 2', () => {
  expect(projectionArea([[1,2],[3,4]])).toBe(17)
})

test('case 3', () => {
  expect(projectionArea([[1,0],[0,2]])).toBe(8)
})

test('case 4', () => {
  expect(projectionArea([[1,1,1],[1,0,1],[1,1,1]])).toBe(14)
})


test('case 5', () => {
  expect(projectionArea([[2,2,2],[2,1,2],[2,2,2]])).toBe(21)
})
