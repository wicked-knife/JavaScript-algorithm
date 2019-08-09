import defangIPaddr from '../src/String/defanging-an-ip-address.js'

test('case 1', () => {
  expect(defangIPaddr('1.1.1.1')).toBe('1[.]1[.]1[.]1')
})

test('case 1', () => {
  expect(defangIPaddr('255.100.50.0')).toBe('255[.]100[.]50[.]0')
})