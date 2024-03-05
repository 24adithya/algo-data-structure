// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const isBalanced = root => {
  if (root === null) {
    return 0;
  }

  const leftHt = findHeight(root.left);
  const rightHt = findHeight(root.right);

  console.log(leftHt, rightHt);

  if (Math.abs(leftHt - rightHt) <= 1) return true;
  else return false;
};

const findHeight = node => {
  if (node === null) {
    return 0;
  }

  return Math.max(findHeight(node.left), findHeight(node.right)) + 1;
};

//case 1
// let root = new TreeNode(3);
// root.left = new TreeNode(9);
// root.right = new TreeNode(20);
// root.right.left = new TreeNode(15);
// root.right.right = new TreeNode(7);

// console.log(isBalanced(root));

// //case 2
// root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.right.right = new TreeNode(6);

// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(4);
// root.left.right.left = new TreeNode(7);
// root.left.right.left.right = new TreeNode(8);

// console.log(isBalanced(root));

//case 3
[1, 2, 2, 3, null, null, 3, 4, null, null, 4];

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(9);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = null;
root.right.right = new TreeNode(10);
root.left.left.left = new TreeNode(5);
root.left.left.right = new TreeNode(6);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(8);

console.log(isBalanced(root));
