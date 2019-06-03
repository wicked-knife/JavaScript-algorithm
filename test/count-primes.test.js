import countPrimes from '../src/Number/count-primes.js'

test('case 1', () => {
  expect(countPrimes(10)).toBe(4)
})


test('case 2', () => {
  expect(countPrimes(3)).toBe(1)
})
