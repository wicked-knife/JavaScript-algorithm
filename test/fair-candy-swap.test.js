import fairCandySwap from '../src/Number/fair-candy-swap.js'

test('case 1', () => {
  expect(fairCandySwap([1,1], [2,2])).toEqual([1,2])
})


test('case 2', () => {
  expect(fairCandySwap([1,2], [2,3])).toEqual([1,2])
})


test('case 3', () => {
  expect(fairCandySwap([2], [1,3])).toEqual([2,3])
})

test('case 4', () => {
  expect(fairCandySwap([1,2,5], [2,4])).toEqual([5,4])
})