/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const addresses = new Set()
  for(let email of emails) {
    const domain = email.match(/@(\w.*).com/)[1]
    const local = email.replace(/\+.*(?=@)/, '').replace(/\./g, '').match(/^[\w\d]+(?=@)/)[0]
    addresses.add(local + '@' + domain + '.com')
  }
  return addresses.size
}

export default numUniqueEmails