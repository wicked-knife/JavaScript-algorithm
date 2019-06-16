import diStringMatch from '../src/String/di-string-match.js'

test('case 1', () => {
  expect(diStringMatch('IDID')).toEqual([0,4,1,3,2])
})

test('case 2', () => {
  expect(diStringMatch('III')).toEqual([0,1,2,3])
})


test('case 3', () => {
  expect(diStringMatch('DDI')).toEqual([3,2,0,1])
})