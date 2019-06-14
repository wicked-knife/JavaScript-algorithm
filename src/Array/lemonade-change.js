/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  const change = {
    5: 0,
    10: 0
  }
  for(let i = 0 ; i < bills.length; i++) {
    let pay = bills[i]
    if(pay === 5) {
      change[pay]++
      continue
    }
    if(pay === 10) {
      change[ 5 ]--
      change[pay]++
      if(change[ 5 ] < 0) {
        return false
      }
      continue
    }
    if(pay === 20) {
      if(change[10] === 0) {
        if(change[5] < 3) {
          return false
        } else {
          change[5]-=3
        }
      } else {
        change[10]--
        change[5]--
        if(change[10] < 0 || change[5] < 0) {
          return false
        }
      }
    }
  }
  return true
}

export default lemonadeChange