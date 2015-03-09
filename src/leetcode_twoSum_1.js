/*
Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/


/* first try
Algorithm:
	Iterate through each element of the loop 
	for that element, iterate through eeach element of the loop
	and find the sum of the 2 numbers
	if the sum is equal to the target, return the index
	else, not found, return [null, null]

	Not great but quick implementation
	O(n^2)

*/
function twoSum_1(array, target){
	for (var i=0; i<array.length; i++){
		for (var j=0; j<array.length; j++){
			if (j===i){
				//  if itself 
				continue; // go to the next j loop
			}
			if (array[i]+array[j]===target){
				// if found such 2 numbers
				return [i,j];
			}
		}
	}

	// else, if iterate through all the array and didn't find
	// 2 numbers that adds to target, return null
	return [null, null];
	
}