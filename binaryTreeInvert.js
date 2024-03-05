// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// test case 0
const root = new TreeNode(4);
const a = new TreeNode(2);
const b = new TreeNode(7);
const c = new TreeNode(1);
const d = new TreeNode(3);
const e = new TreeNode(6);
const f = new TreeNode(9);

root.left = a;
root.right = b;

a.left = c;
a.right = d;

b.left = e;
b.right = f;

// test case 1
const root1 = new TreeNode(1);
const a1 = new TreeNode(2);

root1.left = a1;

// test case 2
const root2 = new TreeNode(4);
const a2 = new TreeNode(2);
const b2 = new TreeNode(7);
const c2 = new TreeNode(3);
const d2 = new TreeNode(9);
const e2 = new TreeNode(10);
const f2 = new TreeNode(15);

root2.left = a2;
root2.right = b2;

a2.right = c2;
b2.right = d2;

c2.left = e2;
d2.left = f2;

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = root => {
  if (root === null) return root;

  const stack = [];
  stack.push(root);

  while (stack.length > 0) {
    const currentNode = stack.pop();

    let right = currentNode?.right ? currentNode.right : null;
    let left = currentNode?.left ? currentNode.left : null;

    const temp = right;
    right = left;
    left = temp;

    currentNode.left = left;
    currentNode.right = right;

    if (currentNode?.left) {
      stack.push(currentNode.left);
    }
    if (currentNode?.right) {
      stack.push(currentNode.right);
    }
  }

  return root;
};

// console.log(invertTree(root));
// console.log(invertTree(root1));
console.log(invertTree(root2));

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Input
//     4
//    / \
//   2   7
//  / \ / \
// 1  3 6  9

// Output
//     4
//    / \
//   7   2
//  / \ / \
// 9  6 3  1

// Input
//    1
//   / \
//  2   n

// Output
//    1
//   / \
//  n   2

// Input
//     4
//    / \
//   2   7
//  / \ / \
// n  3 n  9
//    /\   / \
//   10 n  15 n

// Output
//     4
//    / \
//   7   2
//  / \ / \
// 9  n 3  n
// /\   /\
// n 15 n 10
