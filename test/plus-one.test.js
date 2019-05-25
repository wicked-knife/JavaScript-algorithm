import plusOne from '../src/Array/plus-one.js'


test('case 1', () => {
  expect(plusOne([1, 2, 3])).toEqual([1, 2, 4])
})

test('case 2', () => {
  expect(plusOne([9])).toEqual([1, 0])
})

test('case 3', () => {
  expect(plusOne([8, 9])).toEqual([9, 0])
})

test('case 3', () => {
  expect(plusOne([9, 9])).toEqual([1, 0, 0])
})

test('case 4', () => {
  expect(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])).toEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4])
})

test('case 5', () => {
  expect(plusOne([3,8,6,5,6,9,2,6,6,9])).toEqual([3,8,6,5,6,9,2,6,7,0])
})
