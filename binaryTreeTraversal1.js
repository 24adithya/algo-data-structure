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

//FBADCEGHI
const preOrderTraversal = root => {
  if (root === null) return [];

  const leftTreeValues = preOrderTraversal(root.left);
  const rightTreeValues = preOrderTraversal(root.right);

  return [root.val, ...leftTreeValues, ...rightTreeValues];
};

//ACEDBHIGF
const postOrderTraversal = root => {
  if (root === null) return [];

  const leftTreeValues = postOrderTraversal(root.left);
  const rightTreeValues = postOrderTraversal(root.right);

  return [...leftTreeValues, ...rightTreeValues, root.val];
};

console.log(preOrderTraversal(F));
console.log(postOrderTraversal(F));
