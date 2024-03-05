// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let remainder = undefined,
    tempSum = 0;
  let currentNode = new ListNode(0);
  let tempNode = currentNode;
  while (l1 && l2) {
    tempSum = l1.val + l2.val + (remainder ? remainder : 0);
    l1.val = tempSum % 10;
    currentNode.next = l1;
    l1 = l1.next;
    l2 = l2.next;

    if (tempSum >= 10) {
      remainder = 1;
    } else {
      remainder = 0;
    }
    currentNode = currentNode.next;
  }

  while (l1) {
    tempSum = l1.val + (remainder ? remainder : 0);
    l1.val = tempSum % 10;
    currentNode.next = l1;

    l1 = l1.next;

    if (tempSum >= 10) {
      remainder = 1;
    } else {
      remainder = 0;
    }

    currentNode = currentNode.next;
  }

  while (l2) {
    tempSum = l2.val + (remainder ? remainder : 0);
    l2.val = tempSum % 10;
    currentNode.next = l2;

    l2 = l2.next;

    if (tempSum >= 10) {
      remainder = 1;
    } else {
      remainder = 0;
    }

    currentNode = currentNode.next;
  }

  if (remainder) {
    currentNode.next = new ListNode(remainder);
    currentNode = currentNode.next;
  }

  console.log(JSON.stringify(currentNode));
  console.log(JSON.stringify(tempNode));

  return tempNode.next;
};
