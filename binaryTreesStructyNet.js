class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//Iterative dfs approach
const iterativeDepthFirstValues = root => {
  if (root === null) return [];

  const stack = [];
  const result = [];

  stack.push(root);
  while (stack.length > 0) {
    const currentNode = stack.pop();
    result.push(currentNode.val);

    if (currentNode.right) stack.push(currentNode.right);
    if (currentNode.left) stack.push(currentNode.left);
  }

  console.log(result);
};

//recursive dfs approach
const recursiveDepthFirstValues = root => {
  if (root === null) return [];

  const leftSubTreeNodes = recursiveDepthFirstValues(root.left);
  const rightSubTreeNodes = recursiveDepthFirstValues(root.right);

  console.log(root, ...leftSubTreeNodes, ...rightSubTreeNodes);

  return [root, ...leftSubTreeNodes, ...rightSubTreeNodes];
};

//Iterative bfs approach
const iterativeBreadthFirstValues = root => {
  if (root === null) return [];

  const queue = [];
  const result = [];

  queue.push(root);
  while (queue.length > 0) {
    const currentNode = queue.shift();
    result.push(currentNode.val);

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  console.log(result);
};

//recursive bfs approach IS DIFFICULT AS under the hood recursion uses a STACK and we need a QUEUE here
// const recursivBreadthFirstValues = root => {
//   if (root === null) return [];

//   const leftSubTreeNodes = recursivBreadthFirstValues(root.left);
//   const rightSubTreeNodes = recursivBreadthFirstValues(root.right);

//   console.log(root, ...leftSubTreeNodes, ...rightSubTreeNodes);

//   return [root, ...leftSubTreeNodes, ...rightSubTreeNodes];
// };

//Recursive tree includes element
const recursiveTreeIncludes = (root, value) => {
  if (root === null) return false;

  if (root.val === value) return true;
  return (
    recursiveTreeIncludes(root.left, value) ||
    recursiveTreeIncludes(root.right, value)
  );
};

//Iterative tree includes element
const iterativeTreeIncludes = (root, value) => {
  if (root === null) return false;

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === value) {
      return true;
    }

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false;
};

//Iterative tree includes element
const iterativeTreeSum = root => {
  if (root === null) return 0;

  const queue = [];
  queue.push(root);
  let treeSum = 0;
  while (queue.length > 0) {
    const current = queue.shift();
    treeSum += current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return treeSum;
};

//recursive tree sum #1 approach
let maxSum = 0;
const recursiveTreeSum1 = root => {
  if (root === null) return 0;

  if (root.val) {
    maxSum += root.val;
  }

  recursiveTreeSum1(root.left);
  recursiveTreeSum1(root.right);
  return maxSum;
};

//recursive tree sum #2 approach
let maxSum2 = 0;
const recursiveTreeSum2 = root => {
  if (root === null) return 0;

  const leftSum = recursiveTreeSum2(root.left);
  const rightSum = recursiveTreeSum2(root.right);
  maxSum2 = root.val + leftSum + rightSum;
  return maxSum2;
};

//     a
//    / \
//   b   c
//  / \   \
// d   e   f

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//     3
//    / \
//   11  4
//  / \   \
// 4   2   1

const a1 = new Node(3);
const b1 = new Node(11);
const c1 = new Node(4);
const d1 = new Node(4);
const e1 = new Node(2);
const f1 = new Node(1);

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;

// console.log(recursiveDepthFirstValues(a));
// console.log(iterativeBreadthFirstValues(a));
console.log(recursiveTreeIncludes(a, 'g'));
console.log(iterativeTreeIncludes(a, 'g'));

console.log(iterativeTreeSum(a1));
console.log(recursiveTreeSum1(a1));
console.log(recursiveTreeSum2(a1));

//     5
//    / \
//   11  3
//  / \   \
// 4  15  12

//recursive tree min value
const recursiveTreeMinValue = root => {
  if (root === null) return Infinity;

  const leftSum = recursiveTreeMinValue(root.left);
  const rightSum = recursiveTreeMinValue(root.right);
  return Math.min(leftSum, rightSum, root.val);
};

//iterative tree min value
const iterativeTreeMinValue = root => {
  if (root === null) return 0;

  let smallest = Infinity;
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val < smallest) {
      smallest = current.val;
    }

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return smallest;
};

//     -1
//    / \
//   -11  -3
//  / \   \
// -4  -15  -24

//recursive tree min value - find max path from root to sum
//we have to add the values as well so only considering the root will not work i.e.
// for root as null returning -Infinity will not suffice as we also need to add the values
const recursiveMaxLeafPathSum = root => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;

  const leftSum = recursiveMaxLeafPathSum(root.left);
  const rightSum = recursiveMaxLeafPathSum(root.right);
  let maxPath = Math.max(leftSum, rightSum);
  return (maxPath += root.val);
};

const a2 = new Node(-1);
const b2 = new Node(-11);
const c2 = new Node(-3);
const d2 = new Node(-4);
const e2 = new Node(-15);
const f2 = new Node(-24);

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2;

console.log(recursiveTreeMinValue(a2));
console.log(iterativeTreeMinValue(a2));
console.log(recursiveMaxLeafPathSum(a2));
