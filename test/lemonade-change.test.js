import lemonadeChange from '../src/Array/lemonade-change.js'

test('case 1', () => {
  expect(lemonadeChange([5,5,5,10,20])).toBe(true)
})


test('case 2', () => {
  expect(lemonadeChange([5,5,10])).toBe(true)
})



test('case 3', () => {
  expect(lemonadeChange([10,10])).toBe(false)
})


test('case 4', () => {
  expect(lemonadeChange([5,5,10,10,20])).toBe(false)
})


test('case 5', () => {
  expect(lemonadeChange([5,10,5,10,20])).toBe(false)
})
