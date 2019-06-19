import canThreePartsEqualSum from '../src/Array/partition-array-into-three-parts-with-equal-sum.js'

test('case 1', () => {
  expect(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1])).toBe(true)
})

test('case 2', () => {
  expect(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1])).toBe(false)
})

test('case 3', () => {
  expect(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4])).toBe(true)
})

test('case 4', () => {
  expect(canThreePartsEqualSum([3,3,3])).toBe(true)
})
