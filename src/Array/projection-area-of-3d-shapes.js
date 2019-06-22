/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let sum = 0
  for (let i = 0; i < grid.length; i++) {
    sum += Math.max(...grid[i])
    for (let j = 0; j < grid[i].length; j++) {
      if(grid[i][j] !== 0) {
        sum++
      }
      if(i === 0) {
        let max = 0
        for(let k = 0; k < grid.length; k++) {
          max = Math.max(max, grid[k][j])
        }
        sum+= max
      }
    }
  }
  return sum
}


export default projectionArea