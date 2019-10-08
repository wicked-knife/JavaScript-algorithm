/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const numbers = []
  let acc = []
  const max = n - k + 1
  for(let i = 1; i <= n; i++) {
    numbers.push(i)
    if(i <= max) {
      acc.push([i])
    }
  }
  if(n === k) {
    return [ numbers ]
  }

  let _k = 1

  while(_k !== k) {
    const _acc = []
    for(let i = 0 ; i < acc.length; i++) {
      for(let j = acc[i][acc[i].length - 1] + 1; j <= n; j++) {
        _acc.push( acc[i].concat(j) )
      }
    }
    acc = _acc
    _k++
  }

  return acc
}


export default combine