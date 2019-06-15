import isMonotonic from '../src/Array/monotonic-array.js'

test('case 1', () => {
  expect(isMonotonic([1,2,2,3])).toBe(true)
})


test('case 2', () => {
  expect(isMonotonic([6,5,4,4])).toBe(true)
})


test('case 3', () => {
  expect(isMonotonic([1,3,2])).toBe(false)
})


test('case 4', () => {
  expect(isMonotonic([1,2,4,5])).toBe(true)
})


test('case 5', () => {
  expect(isMonotonic([1,1,1])).toBe(true)
})

test('case 6', () => {
  expect(isMonotonic([1,1,0])).toBe(true)
})

test('case 7', () => {
  expect(isMonotonic([6,6,6,5,4])).toBe(true)
})

test('case 8', () => {
  expect(isMonotonic([6,6,6,7,6])).toBe(false)
})

test('case 9', () => {
  expect(isMonotonic([6,6,6,7,8])).toBe(true)
})

test('case 10', () => {
  expect(isMonotonic([6,6,6,7,6])).toBe(false)
})

test('case 11', () => {
  expect(isMonotonic([11,11,9,4,3,3,3,1,-1,-1,3,3,3,5,5,5])).toBe(false)
})