import moveZeroes from '../src/Array/move-zeroes.js'

test('case 1', () => {
  expect(moveZeroes([0,1,0,3,12])).toEqual([1,3,12,0,0])
})
