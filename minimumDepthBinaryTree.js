class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Case 1:

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
//         / \      \
//        A   D      I
//           / \    /
//          C  E   H

const minimumDepth = root => {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 1; //leaf node

  const leftTreeValue =
    root.left !== null ? minimumDepth(root.left) : Number.MAX_SAFE_INTEGER;
  const rightTreeValue =
    root.right !== null ? minimumDepth(root.right) : Number.MAX_SAFE_INTEGER;

  return Math.min(leftTreeValue, rightTreeValue) + 1;
};

// console.log(minimumDepth(F));

// Case 1:

let a = new Node('2'); //root
let b = new Node('3');
let c = new Node('4');
let d = new Node('5');
let e = new Node('6');

a.left = null;
a.right = b;
b.left = null;
b.right = c;
c.left = null;
c.right = d;
d.left = null;
d.right = e;

console.log(minimumDepth(a));
