class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let F = new Node('F'); //root
let B = new Node('B');
let G = new Node('G');
let A = new Node('A');
let D = new Node('D');
let I = new Node('I');
let C = new Node('C');
let E = new Node('E');
let H = new Node('H');

F.left = B;
F.right = G;
B.left = A;
B.right = D;
D.left = C;
D.right = E;
G.right = I;
I.left = H;

//             F
//           /   \
//          B      G
//         / \     /\
//        A   D    n I
//       /\  / \    / \
//      n n  C  E   H  n
//          /\  /\  /\
//          n n n n n n

// preorder - FBADCEGIH;
// inorder - ABCDEFGHI;
// postorder - ACEDBHIGF;

const postOrderTraversal = root => {
  if (root === null) return [];

  const leftNodes = postOrderTraversal(root.left);
  const rightNodes = postOrderTraversal(root.right);
  return [...leftNodes, ...rightNodes, root.val];
};

const iterativePostOrderTraversal = root => {
  if (root === null) return [];

  const stack = [];
  const result = [];
  stack.push(root);
  //   while (stack.length > 0) {}

  return result;
};

console.log(postOrderTraversal(F));
console.log(iterativePostOrderTraversal(F));

const preOrderTraversal = root => {
  if (root === null) return [];

  //   const nodes = [];
  //   nodes.push(root.val);
  const leftNodes = preOrderTraversal(root.left);
  //   nodes.push(...leftNodes);

  const rightNodes = preOrderTraversal(root.right);
  //   nodes.push(...rightNodes);

  //   return nodes;

  return [root.val, ...leftNodes, ...rightNodes];
};

console.log(preOrderTraversal(F));

const inOrderTraversal = root => {
  if (root === null) return [];

  const leftNodes = inOrderTraversal(root.left);
  //   nodes.push(...leftNodes);

  const rightNodes = inOrderTraversal(root.right);
  //   nodes.push(...rightNodes);

  //   return nodes;

  return [...leftNodes, root.val, ...rightNodes];
};

console.log(inOrderTraversal(F));
