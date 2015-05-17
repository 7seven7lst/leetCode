/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
 var numStr = x.toString().split('');
 function palindromeHelper (numStr) {
   if (numStr.length <= 1) {
     return true;
   } else {
     if ( numStr[0] === numStr[numStr.length-1]) {
       numStr.shift();
       numStr.pop();
       return palindromeHelper(numStr);
     } else {
       return false;
     }
   }
 }
 return palindromeHelper(numStr);
 
};

