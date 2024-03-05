function Node(data) {
  this.data = data;
  this.rightChild = undefined;
  this.leftChild = undefined;
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

  this.insert = function (data) {
    this.root = insertNode(this.root, data);
  };

  this.display = function () {
    const result = inorderTraversal(this.root);
    result.map(node => console.log(node.data));
  };
}

const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(5);
avlTree.insert(2);
avlTree.display();
