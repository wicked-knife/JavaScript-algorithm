/**
 * 利用了集合的思想，集合中没有就加入，已存在就认为2个元素可以在文首和文尾形成回文就在总长度上+2，
 * 并从集合中删除，最后如果集合不是空的，就再+1（认为单个元素可以放在回文的中间）
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  var set = new Set()
  var count = 0
  for(var i=0; i<s.length; i++){
    if(set.has(s[i])){
      count +=2
      set.delete(s[i])
    }else{
      set.add(s[i])
    }
  }
  return set.size>0 ? count+1 : count
}


export default longestPalindrome