/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const memory = [n]
  const flag = true
  function getResult (m) {
    let s = m.toString()
    let ret = 0
    for(let i = 0 ; i < s.length; i++) {
      ret += Math.pow( s[i] * 1, 2 )
    }
    return ret
  }
  while(flag) {
    let result = getResult(memory[memory.length - 1])
    if(result === 1) {
      return true
    }
    if(memory.indexOf(result) === -1) {
      memory.push(result)
    } else {
      return false
    }
  }
}

export default isHappy