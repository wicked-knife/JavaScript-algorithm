import simplifyPath from '../src/Stack/simplify-path'

test('case 1', () => {
  expect(simplifyPath('/home/')).toBe('/home')
})

test('case 2', () => {
  expect(simplifyPath('/../')).toBe('/')
})

test('case 3', () => {
  expect(simplifyPath('/a/./b/../../c/')).toBe('/c')
})


test('case 4', () => {
  expect(simplifyPath('/a/../../b/../c//.//')).toBe('/c')
})

test('case 5', () => {
  expect(simplifyPath('/a//b////c/d//././/..')).toBe('/a/b/c')
})

test('case 6', () => {
  expect(simplifyPath('/home//foo/')).toBe('/home/foo')
})

test('case 7', () => {
  expect(simplifyPath('/.')).toBe('/')
})