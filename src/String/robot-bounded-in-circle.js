/**
 * 如果四次循环内不能够回到原点，则永远没办法回到原点。
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
  const maxTimes = 4
  const directions = ['N', 'E', 'S', 'W']
  let direcIndex = 0
  let direc = directions[direcIndex]
  let i = 0
  const p = [0, 0]
  while(i <= maxTimes) {
    for(let o of instructions) {
      if(o === 'G') {
        switch(direc) {
        case 'N':
          p[1]++
          break
        case 'S':
          p[1]--
          break
        case 'E':
          p[0]++
          break
        case 'W':
          p[0]--
          break
        }
        continue
      }
      if(o === 'R') {
        direcIndex++
        if(direcIndex === 4) {
          direcIndex = 0
        }
        direc = directions[direcIndex]
        continue
      }
      if(o === 'L') {
        direcIndex--
        if(direcIndex < 0) {
          direcIndex = 3
        }
        direc = directions[direcIndex]
      }
    }
    if(p[0] === 0 & p[1] === 0) {
      return true
    } else {
      i++
    }
  }
  return false
}


export default isRobotBounded