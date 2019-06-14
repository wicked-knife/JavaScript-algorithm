import uncommonFromSentences from '../src/String/uncommon-words-from-two-sentences.js'

test('case 1', () => {
  expect(uncommonFromSentences('this apple is sweet', 'this apple is sour')).toEqual(['sweet','sour'])
})


test('case 2', () => {
  expect(uncommonFromSentences('apple apple', 'banana')).toEqual(['banana'])
})

test('case 3', () => {
  expect(uncommonFromSentences('apple', 'banana')).toEqual(['apple','banana'])
})
