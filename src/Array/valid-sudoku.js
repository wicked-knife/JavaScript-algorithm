/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for(let i = 0; i < 9; i++) {
    const rowChecker = []
    const columnChecker = []
    for(let j = 0; j < 9; j++) {
      // check row
      if(board[i][j] !== '.') {
        if(!rowChecker[ board[i][j] ]) {
          rowChecker[board[i][j]] = 1
        } else {
          return false
        }
      }
      // check column
      if(board[j][i] !== '.') {
        if(!columnChecker[ board[j][i] ]) {
          columnChecker[board[j][i]] = 1
        } else {
          return false
        }
      }
      // check square
      if(i % 3 === 0 && j % 3 === 0) {
        const squareChecker = []
        for(let m = i; m < i + 3; m++) {
          for(let n = j; n < j + 3; n++) {
            if(board[m][n] !== '.') {
              if(!squareChecker[ board[m][n] ]) {
                squareChecker[ board[m][n] ] = 1
              } else {
                return false
              }
            }
          }
        }
      }
    }
  }
  return true
}

export default isValidSudoku