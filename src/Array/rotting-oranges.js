/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const flag = true
  let count = 0

  do {
    // 每次感染扩散时记录要被感染的橘子， 如数组为空说明感染已经扩散完毕
    let rotted = []
    for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[i].length; j++) {
        if(grid[i][j] === 2) {
          // 检测坏橘子右边
          if(grid[i][j + 1] !== undefined){
            if(grid[i][j + 1] === 1) {
              rotted.push([i, j + 1])
            }
          }
          // 检测坏橘子左边
          if(grid[i][j - 1] !== undefined){
            if(grid[i][j - 1] === 1) {
              rotted.push([i, j - 1])
            }
          }
          // 检测坏橘子上面
          if(grid[i - 1] !== undefined) {
            if(grid[i - 1][j] === 1) {
              rotted.push([i - 1, j])
            }
          }
          // 检测坏橘子下面
          if(grid[i + 1] !== undefined) {
            if(grid[i + 1][j] === 1) {
              rotted.push([i + 1, j])
            }
          }
        }
      }
    }
    if(rotted.length === 0) {
      break
    }
    count ++
    for(let badOrange of rotted) {
      grid[ badOrange[0] ][ badOrange[1] ] = 2
    }
  } while (flag)
  return grid.reduce((acc, cur) => acc.concat(cur)).includes(1) ? -1 : count
}

export default orangesRotting