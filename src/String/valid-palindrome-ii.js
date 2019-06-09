/** 需要优化
 * @param {string} s
 * @return {boolean}
 */

function validate(s){
  return s === s.split('').reverse().join('')
}

var validPalindrome = function(s) {
  if(validate(s)) {return true}
  let mid = Math.floor(s.length / 2)
  debugger
  for(let i = 0 ; i < mid; i++) {
    if(s[i] !== s[s.length - i - 1]) {
      let temp1 = s.split('').slice()
      let temp2 = s.split('').slice()
      temp1.splice(i, 1)
      temp2.splice(s.length - i - 1, 1)
      if(validate(temp1.join('')) || validate(temp2.join(''))) {
        return true
      } else {
        return false
      }
    }
  }
}

export default validPalindrome