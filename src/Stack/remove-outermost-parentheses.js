/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let ret = ''
  let count = 0
  let stack = []
  for(let s of S) {
    s === '(' ? count++ : count--
    stack.push(s)
    if(count === 0) {
      stack.pop()
      stack.shift()
      ret += stack.join('')
      stack = []
    }
  }
  return ret
}

export default removeOuterParentheses