/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u','v'],
  9: ['w', 'x', 'y', 'z']
}

function combine(a1, a2) {
  if (!a1.length || !a2.length) {
    return a1.concat(a2)
  }
  let res = []
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      res.push(a1[i] + a2[j])
    }
  }
  return res
}

var letterCombinations = function (digits) {
  if(!digits) {
    return []
  }
  let res = map[digits[0]]
  for (let i = 0; i < digits.length - 1; i++) {
    res = combine(res, map[digits[i + 1]])
  }
  return res
}


export default letterCombinations