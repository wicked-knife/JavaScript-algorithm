import RecentCounter from '../src/Queue/number-of-recent-calls.js'

test('case 1', () => {
  const c = new RecentCounter()
  expect(c.ping(1)).toBe(1)
  expect(c.ping(100)).toBe(2)
  expect(c.ping(3001)).toBe(3)
  expect(c.ping(3002)).toBe(3)
})
