import uniqueMorseRepresentations from '../src/String/unique-morse-code-words.js'

test('case 1', () => {
  expect(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])).toBe(2)
})

test('case 2', () => {
  expect(uniqueMorseRepresentations(['a'])).toBe(1)
})


test('case 3', () => {
  expect(uniqueMorseRepresentations(['rwjje','aittjje','auyyn','lqtktn','lmjwn'])).toBe(1)
})

test('case 4', () => {
  expect(uniqueMorseRepresentations(['yxmine','yxzd','eljys','uiaopi','pwlk'])).toBe(3)
})

