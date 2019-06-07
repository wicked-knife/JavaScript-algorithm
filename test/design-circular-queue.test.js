import MyCircularQueue from '../src/Queue/design-circular-queue.js'

test('case 1', () => {
  const q = new MyCircularQueue(3)
  expect(q.enQueue(1)).toBe(true)
  expect(q.enQueue(2)).toBe(true)
  expect(q.enQueue(3)).toBe(true)
  expect(q.enQueue(4)).toBe(false)
  expect(q.Rear()).toBe(3)
  expect(q.isFull()).toBe(true)
  expect(q.deQueue()).toBe(true)
  expect(q.enQueue(4)).toBe(true)
  expect(q.Rear()).toBe(4)
})
