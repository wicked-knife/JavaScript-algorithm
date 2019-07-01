/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  if(str1.length < str2.length) {
    [str1, str2] = [str2, str1]
  }
  if( str1.includes(str2) ) {
    for(let i = str2.length; i >= 0; i--) {
      let temp = str2.slice(0, i)
      if(str2.length % temp.length === 0 && str1.length % temp.length === 0) {
        if(temp.padEnd(str1.length, temp) === str1 && temp.padEnd(str2.length, temp) === str2) {
          return temp
        }
      }
    }
  }
  return ''
}


export default gcdOfStrings