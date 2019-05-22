/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  let res = [0, 1, 1]
  if(N <= 2) {return res[N]}
  for(let i = 2; i < N; i++) {
    res[i + 1] = res[i] + res[i - 1]
  }
  return res[N]
}

export default fib