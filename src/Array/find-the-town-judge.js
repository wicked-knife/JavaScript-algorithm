/**
 * 用2个map来保存不同的人
 * map1记录愿意相信某人的人数。只有该人的人数等于 N - 1该人才有可能是法官
 * map2记录不是法官的人，只要相信了任何人，那么此人必定不是法官
 * 只有map1中符合条件的人并且不在map2中，此人才是法官。否则没有人是法官
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  if(N === 1) {return 1}
  const map = {}
  const notJudge = {}
  for(let people of trust) {
    map[ people[ 1 ] ] = (map[ people[ 1 ] ] || 0) + 1
    if(notJudge[ people[0] ] === undefined) {
      notJudge[ people[0] ] = true
    }
  }
  for(let people in map) {
    if( map[people] === N - 1 && !notJudge[ people ]) {
      return people * 1
    }
  }
  return -1
}


export default findJudge