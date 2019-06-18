import addToArrayForm from '../src/Number/add-to-array-form-of-integer.js'

test('case 1', () => {
  expect(addToArrayForm([1,2,0,0], 34)).toEqual([1,2,3,4])
})


test('case 2', () => {
  expect(addToArrayForm([2,7,4], 181)).toEqual([4,5,5])
})


test('case 3', () => {
  expect(addToArrayForm([2, 1, 5], 806)).toEqual([1,0,2,1])
})


test('case 4', () => {
  expect(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 1)).toEqual([1,0,0,0,0,0,0,0,0,0,0])
})


test('case 5', () => {
  expect(addToArrayForm([1, 0], 990)).toEqual([1,0,0,0])
})