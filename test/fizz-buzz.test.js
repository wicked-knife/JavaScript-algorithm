import fizzBuzz from '../src/Array/fizz-buzz.js'

test('case 1', () => {
  expect(fizzBuzz(15)).toEqual([
    '1',
    '2',
    'Fizz',
    '4',
    'Buzz',
    'Fizz',
    '7',
    '8',
    'Fizz',
    'Buzz',
    '11',
    'Fizz',
    '13',
    '14',
    'FizzBuzz'
  ])
})
