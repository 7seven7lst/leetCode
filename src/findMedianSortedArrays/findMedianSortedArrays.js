/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * need to solve inO(log (m+n))
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var m =0, n=0; 
    var arr=[];
    while (m < nums1.length || n < nums2.length) {
      if (nums1[m] === undefined && nums2[n] === undefined) {
        break;
      }
      if ( nums1[m] <= nums2[n] && nums1[m] !== undefined && nums2[n] !== undefined) {
        arr.push(nums1[m]);
        m++;
      } 
      else if ( nums1[m] > nums2[n] && nums1[m] !== undefined && nums2[n] !== undefined) {
        arr.push(nums2[n]);
        n++;
      }
      else if ( nums1[m] === undefined && nums2[n] !== undefined) {
        arr.push(nums2[n]);
        n++;
      }
      else if (nums1[m] !== undefined && nums2[n] === undefined) {
        arr.push(nums1[m]);
        m++;
      }
      else {
        break;
      }
    }

    if ( arr.length %2 === 0 ) {
      return (arr[(arr.length/2)]+ arr[arr.length/2-1])/2;
    }
    return arr[Math.floor(arr.length/2)];
};

var n1=[1,3,5,7];
var n2=[2,4,6,8];
console.log(findMedianSortedArrays(n1,n2));
n1=[1,3,5,7];
n2=[2,4,6];
console.log(findMedianSortedArrays(n1,n2));