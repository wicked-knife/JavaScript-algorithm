import majorityElement from '../src/Number/majority-element.js'

test('case 1', () => {
  expect(majorityElement([3,2,3])).toBe(3)
})


test('case 2', () => {
  expect(majorityElement([2,2,1,1,1,2,2])).toBe(2)
})