/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  return /(\w)\1/g.test(S) ? removeDuplicates(S.replace(/(\w)\1/g, '')) : S
}

export default removeDuplicates