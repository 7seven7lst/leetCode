/*
Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/


/* 2nd try
Algorithm:
	Iterate through each element of the loop 
	for that element of the loop, subtract the target and that element, 
  and if the difference can be found in the array, then return the 2 element, 
  else if iterate through the loop and cannot find such 2 element, return null, null

*/
function twoSum_2(array, target){
	for (var i=0; i<array.length; i++){
      var diff=target-array[i];
      if ( array.indexOf(diff) !== -1 && array.indexOf(diff) !== i){
        // if the difference can be found in array, and the index is not itself,
        // then return both the current index of value (i), and the index of the difference
        return [i, array.indexOf(diff)];
      }
		}

	// else, if iterate through all the array and didn't find
	// 2 numbers that adds to target, return null
	return [null, null];
	
}