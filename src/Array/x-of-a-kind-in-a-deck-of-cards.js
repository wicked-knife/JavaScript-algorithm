/**
 *  获取最小公约数
 *
 * @param {Array [Number] } arr
 * @returns {Number} || {Boolean}
 */
function getMin(arr){
  if(arr.length === 1) {return arr[0]}
  let max = Math.max(...arr)
  for(let i = 2; i <= max; i++) {
    let _passedCount = 0
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] % i !== 0) {
        break
      } else {
        _passedCount++
      }
    }
    if(_passedCount === arr.length){
      return i
    }
  }
  return false
}
  

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  if (deck.length < 2) {
    return false
  }
  let count = {}
  for (let i = 0; i < deck.length; i++) {
    count[deck[i]] ? count[deck[i]]++ : (count[deck[i]] = 1)
  }
  const countArr = Object.values(count)
  const MIN = getMin(countArr)
  return !!MIN
}

export default hasGroupsSizeX