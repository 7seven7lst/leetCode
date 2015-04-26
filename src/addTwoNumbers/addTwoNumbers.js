/*
You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order 
and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */



function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  // as long as either one node still have next linked list
  var carry=0;
  var prevCarry=0;
  var sumNode = new ListNode();
  var head = sumNode;
  while (l1 !== null || l2!== null) {
    var val1;
    var val2;
    if (l1 === null) {
      val1=0;
    } else {
      val1= l1.val;
    }
    if (l2 === null) {
      val2=0;
    } else {
      val2=l2.val;
    }
    prevCarry=carry;

    var digit = val1+val2+prevCarry;
    if (digit >9) {
      digit-=10;
      carry=1;
    } else {
      carry=0;
    }
    sumNode.val = digit;
    l1=l1.next || null;
    l2=l2.next || null;
    if (l1 !== null || l2 !== null) {
      sumNode.next= new ListNode();
      sumNode=sumNode.next;
    }
  }
  return head;
};

var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

var l2= new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1,l2));
