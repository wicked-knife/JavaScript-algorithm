/**
 *
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  if(name.length > typed.length) {
    return false
  }
  if(name === typed) {
    return true
  }
  const reg = /(\w)\1*/g
  name = name.match(reg)
  typed = typed.match(reg)
  if(name.length !== typed.length) {
    return false
  }
  for(let i = 0; i < name.length; i++) {
    if(name[i].length > typed[i].length) {
      return false
    }
  }
  return true
}



export default isLongPressedName