/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const ret = []
  for(let i = 0; i < n; i++) {
    ret[i] = Array(n)
  }
  const max = n ** 2
  let dx = 1
  let dy = 1
  let direction = 'y'
  const position = [0, 0]

  for(let i = 1; i <= max; i++) {
    ret[ position[0] ][ position[1] ] = i
    if(direction === 'y') {
      let newY = position[1] + dy
      if(newY < n && !ret[ position[0] ][ newY ] && newY >= 0) {
        position[1] += dy
      } else {
        direction = 'x'
        dy = -dy
        position[0] += dx
      }
      continue
    }
    if(direction === 'x') {
      let newX = position[0] + dx
      if(newX < n && ret[ newX ] && !ret[newX][position[1]]) {
        position[0] += dx
      } else {
        direction = 'y'
        dx = -dx
        position[1] += dy
      }
    }
  }
  return ret
}

export default generateMatrix