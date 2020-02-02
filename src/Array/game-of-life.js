/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const collection = []
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      const counter = []
      // 检查左上
      if(i !== 0 && j !== 0) {
        let v =  board[i - 1][j - 1]
        counter[v] = (counter[v] || 0) + 1 
      }
      // 检查上
      if(i !== 0) {
        let v = board[i - 1][j]
        counter[v] = (counter[v] || 0) + 1 
      }
      // 检查右上
      if(i !== 0 && j !== board[i].length - 1) {
        let v = board[i - 1][j + 1]
        counter[v] = (counter[v] || 0) + 1 
      }
      // 检查左
      if(j !== 0) {
        let v = board[i][j - 1]
        counter[v] = (counter[v] || 0) + 1 
      }
      // 检查右
      if(j !== board[i].length - 1) {
        let v = board[i][j + 1]
        counter[v] = (counter[v] || 0) + 1 
      }
      // 检查左下
      if(i !== board.length - 1 && j !== 0) {
        let v = board[i + 1][j - 1]
        counter[v] = (counter[v] || 0) + 1 
      }
      // 检查下
      if(i !== board.length - 1) {
        let v = board[i + 1][j]
        counter[v] = (counter[v] || 0) + 1 
      }
      // 检查右下
      if(i !== board.length - 1 && j !== board[i].length - 1) {
        let v = board[i + 1][j + 1]
        counter[v] = (counter[v] || 0) + 1 
      }

      counter[0] = (counter[0] || 0)
      counter[1] = (counter[1] || 0)

      const total = counter[0] + counter[1]
      counter[0] += 8 - total

      // 当前细胞为死细胞
      if(board[i][j] === 0) {
        if(counter[1] === 3) {
          collection.push([i,j])
        }
      }
      // 当前细胞为活细胞
      if(board[i][j] === 1) {
        if(counter[1] < 2 || counter[1] > 3) {
          collection.push([i,j])
        }
      }
    }
  }
  for(let cell of collection) {
    board[ cell[0] ][ cell[1] ] = board[ cell[0] ][ cell[1] ] ^ 1
  }
  
  return board
}

export default gameOfLife