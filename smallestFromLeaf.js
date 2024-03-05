// You are given the root of a binary tree where each node has a value in the range [0, 25] representing the letters 'a' to 'z'.

// Return the lexicographically smallest string that starts at a leaf of this tree and ends at the root.

// As a reminder, any shorter prefix of a string is lexicographically smaller.

// For example, "ab" is lexicographically smaller than "aba".
// A leaf of a node is a node that has no children.

// Example 1:

// Input: root = [0,1,2,3,4,3,4]
// Output: "dba"
// Example 2:

// Input: root = [25,1,3,1,3,0,2]
// Output: "adz"
// Example 3:

// Input: root = [2,2,1,null,1,0,null,0]
// Output: "abc"

// Constraints:

// The number of nodes in the tree is in the range [1, 8500].
// 0 <= Node.val <= 25

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//      z
//    /   \
//   b     d
//  / \   / \
//  b  d  a  c

//'zda'

/**
 * @param {TreeNode} root
 * @return {string}
 */
const smallestFromLeaf = root => {
  const alphaNumericValues = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  if (root === null) {
    return '';
  }

  let result = '';

  return findDFSSmallestPath(root, alphaNumericValues, result);
};

const findDFSSmallestPath = (root, alphaNumericValues, result = '') => {
  if (root === null) {
    return '';
  }

  const left = findDFSSmallestPath(root.left, alphaNumericValues, result);
  const right = findDFSSmallestPath(root.right, alphaNumericValues, result);

  if (left === '' && right !== '') {
    result += right + alphaNumericValues[root.val];
  } else if (left !== '' && right === '') {
    result += left + alphaNumericValues[root.val];
  } else if (
    left + alphaNumericValues[root.val] <
    right + alphaNumericValues[root.val]
  ) {
    result += left + alphaNumericValues[root.val];
  } else {
    result += right + alphaNumericValues[root.val];
  }

  return result;
};

//      z
//    /   \
//   b     d
//  / \   / \
// b   d a   c

//'zda'

//case 1
/* let root = new TreeNode(25);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(2); */

//      c
//    /   \
//   c     b
//   \    /
//    b  a
//    /
//    a

//'abc'

//case 2
/* let root = new TreeNode(2);
root.left = new TreeNode(2);
root.right = new TreeNode(1);
// root.left.left = new TreeNode(1);
root.left.right = new TreeNode(1);
root.right.left = new TreeNode(0);
// root.right.right = new TreeNode(2);
root.left.right.left = new TreeNode(0); */

//case 3

//      e
//    /   \
//   a     b
//  /
// b

//'bae'

/* let root = new TreeNode(4);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1); */

// case 4
// [25,1,null,0,0,1,null,null,null,0]

//          z
// 			  /   \
// 		   b     n
// 		  /  \
// 		 a    a
// 		/ \  / \
// 	 b   n n  n
//  / \
// n   a

//'ababz'

let root = new TreeNode(25);
root.left = new TreeNode(1);
// root.right = new TreeNode(1);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(0);
root.left.left.left = new TreeNode(1);
root.left.left.left.right = new TreeNode(0);

console.log(smallestFromLeaf(root));
