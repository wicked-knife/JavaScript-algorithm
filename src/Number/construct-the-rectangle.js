/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let s = Math.round(Math.sqrt(area))
  while (area % s != 0) {
    s--
  }
  return [area / s, s]
}

export default constructRectangle
