/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(!matrix.length) {
    return []
  }
  let dx = 1
  let dy = 1
  let direction = 'y'
  let position = [0, 0]
  const ret = []
  const max = matrix.length * matrix[0].length
  for(let i = 0; i < max; i++) {
    ret.push( matrix[ position[0] ][ position[1] ] )
    matrix[ position[0] ][ position[1] ] = null
    if(direction === 'y') {
      const newY = position[1] + dy
      if(!matrix[ position[0] ][ newY ]) {
        direction = 'x'
        dy = -dy
        position[0] += dx
      } else {
        position[1] += dy
      }
      continue
    }
    if(direction === 'x') {
      const newX = position[0] + dx
      if(!matrix[newX] || !matrix[newX][ position[1] ]) {
        direction = 'y'
        dx = -dx
        position[1] += dy
      } else {
        position[0] += dx
      }
    }
  }
  return ret
}

export default spiralOrder