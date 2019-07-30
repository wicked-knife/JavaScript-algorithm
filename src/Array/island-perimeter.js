/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let count = 0
  const len = grid[0].length
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if(grid[i][j] === 1) {
        // 检查上方格子
        if((grid[i - 1] && grid[i - 1][j] === 0) || !grid[i - 1]) {
          count++
        }
        // 检查下方格子
        if((grid[i + 1] && grid[i + 1][j] === 0) || !grid[i + 1]) {
          count++
        }
        // 检查左方格子
        if(j - 1 === -1 || grid[i][j - 1] === 0) {
          count++
        }
        // 检查右方格子
        if(j + 1 === len || grid[i][j + 1] === 0) {
          count++
        }
      }
    }
  }
  return count
}

export default islandPerimeter