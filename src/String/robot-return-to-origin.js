/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  if (moves.length % 2 !== 0) {
    return false
  }
  const map = {
    L: 0,
    R: 0,
    U: 0,
    D: 0
  }
  for (let m = 0; m < moves.length; m++) {
    map[ moves[m] ]++
  }
  if (map.L !== map.R || map.U !== map.D) {
    return false
  }
  return true
}

export default judgeCircle