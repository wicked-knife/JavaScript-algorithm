import findJudge from '../src/Array/find-the-town-judge.js'

test('case 1', () => {
  expect(findJudge(2, [[1,2]])).toBe(2)
})

test('case 2', () => {
  expect(findJudge(3, [[1,3],[2,3]])).toBe(3)
})


test('case 3', () => {
  expect(findJudge(3, [[1,3],[2,3],[3,1]])).toBe(-1)
})


test('case 4', () => {
  expect(findJudge(3, [[1,2],[2,3]])).toBe(-1)
})

test('case 5', () => {
  expect(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]])).toBe(3)
})
