class TreeNode {
  constructor(key, value = key, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.children = [];
  }

  get isLeaf() {
    return this.children.length === 0;
  }
  get hasChildren() {
    return !this.isLeaf;
  }
}

class Tree {
  constructor(key, value = key) {
    this.root = new TreeNode(key, value);
  }

  *preOrderTraversal(node = this.root) {
    yield node;
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.preOrderTraversal(child);
      }
    }
  }

  *postOrderTraversal(node = this.root) {
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.postOrderTraversal(child);
      }
    }
    yield node;
  }

  insert(parentNodeKey, key, value = key) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === parentNodeKey) {
        node.children.push(new TreeNode(key, value, node));
        return true;
      }
    }
    return false;
  }

  remove(key) {
    for (let node of this.preOrderTraversal()) {
      const filtered = node.children.filter((c) => c.key !== key);
      if (filtered.length !== node.children.length) {
        node.children = filtered;
        return true;
      }
    }
    return false;
  }

  find(key) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === key) return node;
    }
    return undefined;
  }
}

const tree = new Tree(1, "A");

tree.insert(1, 11, "a");
tree.insert(1, 12, "b");
tree.insert(1, 13, "c");

tree.insert(11, 111, "aa");
tree.insert(12, 121, "ba");
tree.insert(12, 122, "bb");
tree.insert(13, 131, "ca");
tree.insert(13, 132, "cb");

tree.insert(132, 1321, "cba");

console.log([...tree.preOrderTraversal()].map((x) => x.value));
console.log(tree.find(132).isLeaf);
console.log(tree.find(1321).isLeaf);
console.log(tree.find(132).parent.value);
tree.remove(12);
console.log([...tree.postOrderTraversal()].map((x) => x.value));
