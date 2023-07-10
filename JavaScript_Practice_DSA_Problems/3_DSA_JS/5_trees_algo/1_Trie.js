// =========== Trie { Prefix Tree } ===================
// Insert word O(1)
// Search word O(1)
// Search prefix O(1)

class TrieNode {
  constructor() {
    this.isWord = false;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char);
    }
    currentNode.isWord = true;
  }

  search(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return currentNode.isWord;
  }

  startsWith(prefix) {
    let currentNode = this.root;
    for (let char of prefix) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return true;
  }
}
