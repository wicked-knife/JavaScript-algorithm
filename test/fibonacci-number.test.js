import fib from '../src/Array/fibonacci-number.js'

test('fib(4)', () => {
  expect(fib(4)).toBe(3)
})

test('fib(6)', () => {
  expect(fib(6)).toBe(8)
})

test('fib(30)', () => {
  expect(fib(30)).toBe(832040)
})