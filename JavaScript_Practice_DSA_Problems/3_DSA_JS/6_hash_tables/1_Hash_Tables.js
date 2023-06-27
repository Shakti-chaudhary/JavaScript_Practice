class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) this.dataMap[index] = [];

    this.dataMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) return this.dataMap[index][i][1];
      }
    }
    return undefined;
  }
  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

// =========== Creating a hash table ===============

const hashTable = new HashTable(7);
console.log(hashTable);

// Set method

hashTable.set("name", "Harshit");
console.log(hashTable);

hashTable.set("age", 23);
console.log(hashTable);

// Get method

console.log(hashTable.get("name"));
console.log(hashTable.get("age"));
console.log(hashTable.get("gender"));

// Keys method

console.log(hashTable.keys());

hashTable.set("email", "nqH9R@example.com");
console.log(hashTable.keys());

// ============ Hash table based problem ===========

function itemInCommon(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) {
      return true;
    }
  }
}

let array1 = [1, 3, 5];
let array2 = [2, 4, 5];

console.log(itemInCommon(array1, array2));

// Time complexity is O(n) // {O(2n)} 2 drop as a constant
