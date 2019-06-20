import twoCitySchedCost from '../src/Array/two-city-scheduling.js'

test('case 1', () => {
  expect(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]])).toBe(110)
})


test('case 2', () => {
  expect(twoCitySchedCost([[10,20],[30,50],[30,50],[30,40]])).toBe(120)
})
