/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const map = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1
  }
  const collection = {}
  const minNumbers = []
  for(let s of text) {
    collection[s] = collection[s] ? collection[s]+1 : 1
  }
  for(let key in collection) {
    if(map.hasOwnProperty(key)) {
      minNumbers.push(Math.floor(collection[key] / map[key]))
    }
  }
  return minNumbers.length === 5 ? Math.min(...minNumbers) : 0
}

export default maxNumberOfBalloons