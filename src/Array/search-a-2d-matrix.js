/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let targetRow = null
  for(let row of matrix) {
    if(target === row[0]) {
      return true
    }
    if(target === row[row.length - 1]) {
      return true
    }
    if(row[0] < target && target < row[row.length - 1]) {
      targetRow = row
    }
  }

  return targetRow ? targetRow.includes(target) : false

  //   return matrix.some(row => row.includes(target))
}

export default searchMatrix