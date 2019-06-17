/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
  const set = new Set()
  let i = 0
  while( i < bound ) {
    let a = x ** i
    if(a >= bound) {
      break
    }
    let j = 0
    while(j < bound) {
      let b = a + y ** j
      if(b <= bound) {
        set.add( b )
      } else {
        break
      }
      j++
    }
    i++
  }
  return Array.from(set)
}

export default powerfulIntegers