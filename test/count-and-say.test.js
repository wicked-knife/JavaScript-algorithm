import countAndSay from '../src/String/count-and-say.js'

test('case 1', () => {
  expect(countAndSay(1)).toBe('1')
})


test('case 2', () => {
  expect(countAndSay(4)).toBe('1211')
})
