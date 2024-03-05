// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  let current_node = new ListNode(0);
  let temp_node = current_node;

  // Input: list1 = [1,2,3,4,5,6], list2 = [1,3,4]

  while (list1 && list2) {
    if (list1.val < list2.val) {
      // current_node.val = list1.val;
      current_node.next = list1;
      list1 = list1.next;
      console.log('current node = ', current_node);
      console.log('list1 = ', list1);
    } else {
      // current_node.val = list2.val;
      current_node.next = list2;
      list2 = list2.next;
      console.log('current node = ', current_node);
      console.log('list2 = ', list2);
    }
    current_node = current_node.next;
  }

  if (list1 != null) {
    current_node.next = list1;
  }

  if (list2 != null) {
    current_node.next = list2;
  }

  console.log(JSON.stringify(temp_node));
  console.log(JSON.stringify(current_node));
  return temp_node.next;
};

console.log(mergeTwoLists([1, 2, 3, 4, 5, 6], [1, 3, 4]));
