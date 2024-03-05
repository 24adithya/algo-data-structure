// Given the root of a binary tree, return all root-to-leaf currentPaths in any order.

// A leaf is a node with no children.

// Example 1:

//    1
//   / \
//  2   3
//  \
//   5

// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]
// Example 2:

// Input: root = [1]
// Output: ["1"]

// Constraints:

// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */

//    1
//   / \
//  2   3
//  \
//   5

const binaryTreePaths = root => {
  if (root === null) {
    return [];
  }

  const paths = [];

  findDFSPath(root, '', paths);

  return paths;
};

const findDFSPath = (root, currentPath, paths) => {
  currentPath += root.val;

  if (root.left === null && root.right === null) {
    paths.push(currentPath);
    return;
  }

  if (root.left !== null) {
    findDFSPath(root.left, currentPath + '->', paths);
  }

  if (root.right !== null) {
    findDFSPath(root.right, currentPath + '->', paths);
  }
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);

console.log(binaryTreePaths(root));
