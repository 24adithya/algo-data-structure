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
    } else if (
      balanceFactor(node) === -2 &&
      balanceFactor(node.rightChild) === -1
    ) {
      return RRRotation(node);
    } else if (
      balanceFactor(node) === -2 &&
      balanceFactor(node.rightChild) === 1
    ) {
      return RLRotation(node);
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

  const RRRotation = node => {
    const nodeRightChild = node.rightChild;
    const nodeRightChildLeftChild = nodeRightChild.leftChild;

    nodeRightChild.leftChild = node;
    node.rightChild = nodeRightChildLeftChild;

    node.height = nodeHeight(node);
    nodeRightChild.height = nodeHeight(nodeRightChild);

    if (this.root === node) {
      this.root = nodeRightChild;
    }

    return nodeRightChild;
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

    node.height = nodeHeight(node);
    nodeLeftChild.height = nodeHeight(nodeLeftChild);
    nodeLeftChildRightChild.height = nodeHeight(nodeLeftChildRightChild);

    if (this.root === node) {
      this.root = nodeLeftChild;
    }

    return nodeLeftChildRightChild;
  };

  const RLRotation = node => {
    const nodeRightChild = node.rightChild;
    const nodeRightChildLeftChild = nodeRightChild.leftChild;
    const nodeRightChildLeftChildLeftChild = nodeRightChildLeftChild.leftChild;
    const nodeRightChildLeftChildRightChild =
      nodeRightChildLeftChild.rightChild;

    node.rightChild = nodeRightChildLeftChildLeftChild;
    nodeRightChild.leftChild = nodeRightChildLeftChildRightChild;

    // Set new root's left and right children
    nodeRightChildLeftChild.leftChild = node;
    nodeRightChildLeftChild.rightChild = nodeRightChild;

    node.height = nodeHeight(node);
    nodeRightChild.height = nodeHeight(nodeRightChild);
    nodeRightChildLeftChild.height = nodeHeight(nodeRightChildLeftChild);

    if (this.root === node) {
      this.root = nodeRightChildLeftChild;
    }

    return nodeRightChildLeftChild;
  };

  const height = node => {
    let leftSubTreeHeight = 0,
      rightSubTreeHeight = 0;

    leftSubTreeHeight = node?.leftChild ? node?.leftChild.height : 0;
    rightSubTreeHeight = node?.rightChild ? node?.rightChild.height : 0;

    return leftSubTreeHeight > rightSubTreeHeight
      ? leftSubTreeHeight + 1
      : rightSubTreeHeight + 1;
  };

  const inorderPredecessor = node => {
    if (node && node.rightChild) {
      node = node.rightChild;
    }

    return node;
  };

  const inorderSuccessor = node => {
    if (node && node.leftChild) {
      node = node.leftChild;
    }

    return node;
  };

  const deleteNode = (node, key) => {
    if (!node) {
      return;
    }

    //leaf node
    if (node.data === key && !node.leftChild && !node.rightChild) {
      if (node === this.root) {
        this.root = undefined;
      }
      return;
    }

    if (key < node.data) {
      node.leftChild = deleteNode(node.leftChild, key);
    } else if (key > node.data) {
      node.rightChild = deleteNode(node.rightChild, key);
    } else {
      let newRoot;
      if (height(node.leftChild) > height(node.rightChild)) {
        newRoot = inorderPredecessor(node.leftChild);
        node.data = newRoot.data;
        node.leftChild = deleteNode(node.leftChild, newRoot.data);
      } else {
        newRoot = inorderSuccessor(node.rightChild);
        node.data = newRoot.data;
        node.rightChild = deleteNode(node.rightChild, newRoot.data);
      }
    }

    return node;
  };

  this.insert = function (data) {
    this.root = insertNode(this.root, data);
  };

  this.delete = function (key) {
    deleteNode(this.root, key);
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

const avlTreeRR = new AVLTree();
avlTreeRR.insert(10);
avlTreeRR.insert(15);
avlTreeRR.insert(18);
avlTreeRR.display();

const avlTreeRL = new AVLTree();
avlTreeRL.insert(10);
avlTreeRL.insert(18);
avlTreeRL.insert(15);
avlTreeRL.insert(13);
avlTreeRL.insert(14);
avlTreeRL.display();
avlTreeRL.delete(13);
avlTreeRL.display();
avlTreeRL.delete(19);
avlTreeRL.display();
