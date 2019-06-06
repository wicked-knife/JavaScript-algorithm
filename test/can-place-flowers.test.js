import canPlaceFlowers from '../src/Array/can-place-flowers.js'

test('case 1', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true)
})

test('case 2', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false)
})

test('case 3', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)).toBe(true)
})

test('case 4', () => {
  expect(canPlaceFlowers([0, 0, 1, 0, 1], 1)).toBe(true)
})

test('case 5', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)).toBe(true)
})

test('case 6', () => {
  expect(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 1)).toBe(false)
})

test('case 7', () => {
  expect(canPlaceFlowers([0, 0, 1, 0, 0], 1)).toBe(true)
})

test('case 8', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)).toBe(false)
})
