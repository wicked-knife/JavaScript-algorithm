import constructRectangle from '../src/Number/construct-the-rectangle.js'

test('case 1', () => {
  expect(constructRectangle(4)).toEqual([2,2])
})

test('case 2', () => {
  expect(constructRectangle(12)).toEqual([4,3])
})
