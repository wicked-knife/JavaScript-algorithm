/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  S = S.replace(/-/g, '')
  let n = S.length % K
  let ret = ''
  ret = S.slice(0, n) + ret
  for (let i = n; i < S.length; i += K) {
    ret += '-' + S.slice(i, i + K)
  }
  return ret[0] === '-' ? ret.replace('-', '').toUpperCase() : ret.toUpperCase()
}

export default licenseKeyFormatting
