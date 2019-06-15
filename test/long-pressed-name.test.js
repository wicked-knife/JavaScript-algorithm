import isLongPressedName from '../src/String/long-pressed-name.js'

test('case 1', () => {
  expect(isLongPressedName('alex', 'aaleex')).toBe(true)
})


test('case 2', () => {
  expect(isLongPressedName('saeed', 'ssaaedd')).toBe(false)
})


test('case 3', () => {
  expect(isLongPressedName('leelee', 'lleeelee')).toBe(true)
})


test('case 4', () => {
  expect(isLongPressedName('laiden', 'laiden')).toBe(true)
})


test('case 5', () => {
  expect(isLongPressedName('saeedi', 'ssaaeediixxxiii')).toBe(false)
})

test('case 6', () => {
  expect(isLongPressedName('vtkgn', 'vttkgnn')).toBe(true)
})