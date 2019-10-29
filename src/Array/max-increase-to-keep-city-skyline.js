/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  const rowMax = []
  const columnMAX = []
  let height = 0
  for(let i = 0; i < grid.length; i++) {
    columnMAX.push(Math.max(...grid[i]))
    for(let j = 0; j < grid[i].length; j++) {
      rowMax[i] = Math.max(rowMax[i] || 0, grid[j][i])
    }
  }
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      height += Math.min(columnMAX[i], rowMax[j]) - grid[i][j]
    }
  }
  return height
} 


export default maxIncreaseKeepingSkyline