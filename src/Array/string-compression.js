/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let p = chars[0]
  let count = 1
  for(let i = 1 ; i < chars.length; i++) {
    if(chars[i] !== p) {
      p = chars[i]
      if(count !== 1) {
        let temp = count.toString().split('')
        chars.splice(i, 0, ...temp)
        i+= temp.length
      }
      count = 1
    } else {
      count++
      chars.splice(i, 1)
      i--
    }
  }
  if(count > 1) {
    chars.push(...count.toString().split(''))
  }
  return chars.length
}

export default compress