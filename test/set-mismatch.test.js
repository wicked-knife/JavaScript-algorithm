import findErrorNums from '../src/Array/set-mismatch.js'

test('case 1', () => {
  expect(findErrorNums([1,2,2,4])).toEqual([2,3])
})
