function Node(data, height = 1) {
  this.data = data;
  this.rightChild = undefined;
  this.leftChild = undefined;
  this.height = height;
}

function AVLTree() {
  this.root = undefined;

  const insertNode = (node, data) => {
    if (node === undefined) {
      node = new Node(data);

      if (this.root === undefined) {
        this.root = node;
      }

      return node;
    }

    if (data < node.data) {
      node.leftChild = insertNode(node.leftChild, data);
    } else if (data > node.data) {
      node.rightChild = insertNode(node.rightChild, data);
    }

    node.height = nodeHeight(node);

    if (balanceFactor(node) === 2 && balanceFactor(node.leftChild) === 1) {
      return LLRotation(node);
    } else if (
      balanceFactor(node) === 2 &&
      balanceFactor(node.leftChild) === -1
    ) {
      return LRRotation(node);
    }

    return node;
  };

  function inorderTraversal(root, result = undefined) {
    if (result === undefined) {
      result = [];
    }
    if (root === undefined) {
      return;
    }

    inorderTraversal(root.leftChild, result);
    result.push(root);
    inorderTraversal(root.rightChild, result);

    return result;
  }

  const nodeHeight = node => {
    let nodeLeftTreeHeight = 0,
      nodeRightTreeHeight = 0;

    if (node && node.leftChild) nodeLeftTreeHeight = node.leftChild.height;
    if (node && node.rightChild) nodeRightTreeHeight = node.rightChild.height;

    return nodeLeftTreeHeight > nodeRightTreeHeight
      ? nodeLeftTreeHeight + 1
      : nodeRightTreeHeight + 1;
  };

  const balanceFactor = node => {
    let nodeLeftTreeHeight = 0,
      nodeRightTreeHeight = 0;

    if (node && node.leftChild) nodeLeftTreeHeight = node.leftChild.height;
    if (node && node.rightChild) nodeRightTreeHeight = node.rightChild.height;

    return nodeLeftTreeHeight - nodeRightTreeHeight;
  };

  const LLRotation = node => {
    const nodeLeftChild = node.leftChild;
    const nodeLeftChildRightChild = nodeLeftChild.rightChild;

    nodeLeftChild.rightChild = node;
    node.leftChild = nodeLeftChildRightChild;

    node.height = nodeHeight(node);
    nodeLeftChild.height = nodeHeight(nodeLeftChild);

    if (this.root === node) {
      this.root = nodeLeftChild;
    }

    return nodeLeftChild;
  };

  const LRRotation = node => {
    const nodeLeftChild = node.leftChild;
    const nodeLeftChildRightChild = nodeLeftChild.rightChild;
    const nodeLeftChildRightChildLeftChild = nodeLeftChildRightChild.leftChild;
    const nodeLeftChildRightChildRightChild =
      nodeLeftChildRightChild.rightChild;

    nodeLeftChildRightChild.leftChild = nodeLeftChild;
    nodeLeftChildRightChild.rightChild = node;

    nodeLeftChild.rightChild = nodeLeftChildRightChildLeftChild;
    node.leftChild = nodeLeftChildRightChildRightChild;

    nodeLeftChildRightChild.leftChild = nodeLeftChild;
    nodeLeftChildRightChild.rightChild = node;

    node.height = nodeHeight(node);
    nodeLeftChild.height = nodeHeight(nodeLeftChild);
    nodeLeftChildRightChild.height = nodeHeight(nodeLeftChildRightChild);

    if (this.root === node) {
      this.root = nodeLeftChild;
    }

    return nodeLeftChildRightChild;
  };

  this.insert = function (data) {
    this.root = insertNode(this.root, data);
  };

  this.display = function () {
    const result = inorderTraversal(this.root);
    result.map(node => console.log(node.data));
  };
}

const avlTreeLL = new AVLTree();
avlTreeLL.insert(10);
avlTreeLL.insert(5);
avlTreeLL.insert(2);
avlTreeLL.display();

const avlTreeLR = new AVLTree();
avlTreeLR.insert(10);
avlTreeLR.insert(5);
avlTreeLR.insert(8);
avlTreeLR.insert(7);
avlTreeLR.insert(9);
avlTreeLR.display();
