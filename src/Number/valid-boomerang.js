/**
 * x轴斜率不存在
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
  const k1 = (points[1][1] - points[0][1]) / (points[1][0] - points[0][0])
  const k2 = (points[2][1] - points[1][1]) / (points[2][0] - points[1][0])
  if(isNaN(k1) || isNaN(k2) || (Math.abs(k1) === Infinity && Math.abs(k2) === Infinity)) {return false}
  return k2 !== k1
}

export default isBoomerang