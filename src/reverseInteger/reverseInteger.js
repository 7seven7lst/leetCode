/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var xs = x.toString();
  var sign = "";
  var xArr = xs.split('');
  if (xArr[0] === "-") {
    sign = "-";
    xArr.shift();
  }
  return sign + xArr.reverse().join('');
};

console.log(reverse(123));
console.log(reverse(-123));