/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const stack = [0]
  for(let opt of ops) {
    if(opt === 'C') {
      stack.pop()
      continue
    }

    if(opt === 'D') {
      stack.push( stack[stack.length - 1] * 2 )
      continue
    }

    if(opt === '+') {
      stack.push( stack[stack.length - 1] + stack[stack.length - 2] )
      continue
    }

    stack.push( Number(opt) )
  }
  return stack.reduce((acc, cur) => acc+=cur)
}

export default calPoints