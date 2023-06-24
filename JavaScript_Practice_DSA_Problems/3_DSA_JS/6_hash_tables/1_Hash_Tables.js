class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.dataMap.length;
    }
    return hash;
  }
}

// =========== Creating a hash table ===============

const hashTable = new HashTable();
console.log(hashTable);
