/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  const size = costs.length / 2
  const A = []
  const B = []
  costs.sort((a,b) => (Math.max(...b) - Math.min(...b)) - (Math.max(...a) - Math.min(...a)) ) 
  for(let cost of costs) {
    if(A.length === size) {
      B.push(cost[1])
      continue
    }
    if(B.length === size) {
      A.push(cost[0])
      continue
    }
    cost[0] >= cost[1] ? B.push(cost[1]) : A.push(cost[0])
  }
  return A.concat(B).reduce((acc, cur) => acc += cur)
}

export default twoCitySchedCost