/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  path = path.replace(/\/+/g, '/').replace(/(?<!\.)\.\//g, '').replace(/(?<!\.)\.$/, '')
  const stack = []
  path.split('/').forEach(char => {
    if(char === '..') {
      stack.pop()
    } else if(char) {
      stack.push(char)
    }
  })
  return '/' + stack.join('/')
}

export default simplifyPath