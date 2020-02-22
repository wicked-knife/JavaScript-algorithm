/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  function countNext(str){
    const matched = str.match(/(\d)\1*/g)
    return matched.reduce((acc, cur) => acc += (cur.length + cur[0]),'')
  }
  const results = ['1']
  while(n > 1) {
    results.push( countNext(results[results.length - 1]) )
    n--
  }
  return results[results.length - 1]
}

export default countAndSay