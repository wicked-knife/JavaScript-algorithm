/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const m = matrix[0].length
  const n = matrix.length
  const zeroes = {
    rows: [],
    columns: []
  }
  for(let i = 0 ; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === 0) {
        !zeroes.rows.includes(i) && zeroes.rows.push(i)
        !zeroes.columns.includes(j) && zeroes.columns.push(j)
      }
    }
  }

  for(let row of zeroes.rows) {
    for(let i = 0; i < m; i++) {
      matrix[row][i] = 0
    }
  }
  
  
  for(let column of zeroes.columns) {
    for(let i = 0; i < n; i++) {
      matrix[i][column] = 0
    }
  }

  return matrix
}

export default setZeroes