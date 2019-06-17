import powerfulIntegers from '../src/Number/powerful-integers.js'

test('case 1', () => {
  expect(powerfulIntegers(2,3,10)).toEqual([2,4,10,3,5,7,9])
})


test('case 2', () => {
  expect(powerfulIntegers(3,5,15)).toEqual([2,6,4,8,10,14])
})
