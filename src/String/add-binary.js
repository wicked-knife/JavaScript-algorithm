/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let base
  if(a.length >= b.length) {
    base = a
  } else {
    let temp = a
    a = b
    b = temp
    base = a
  }
  let ret = ''
  let needCarry = 0
  // 统一在最前面加个0，防止进位
  base = '0' + base
  b = b.padStart(base.length, '0')
  let i = base.length - 1
  while(i >= 0) {
    let res
    res = Number( base[i] ) + Number( b[i] ) + needCarry
    if(res > 1) {
      res = res - 2
      needCarry = 1
    } else {
      needCarry = 0
    }
    ret = res + ret
    i--
  }
  ret[0] === '0' && ( ret = ret.slice(1, ret.length) )
  return ret
}

export default addBinary