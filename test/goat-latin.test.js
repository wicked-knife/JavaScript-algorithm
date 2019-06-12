import toGoatLatin from '../src/String/goat-latin.js'

test('case 1', () => {
  expect(toGoatLatin('I speak Goat Latin')).toBe('Imaa peaksmaaa oatGmaaaa atinLmaaaaa')
})


test('case 2', () => {
  expect(toGoatLatin('The quick brown fox jumped over the lazy dog')).toBe('heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa')
})