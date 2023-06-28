//   Vertexis or Node
//   Edge or connection
//   Bidirectional edge {connected to both sides}
//   Directional edge {connected to one vertex}
//   Adjacency matrix
//   Adjacency list

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }
  addEdge(vertex1, vertex2) {
    if (
      this.adjacencyList[vertex1] &&
      this.adjacencyList[vertex2] &&
      !this.adjacencyList[vertex1].includes(vertex2) &&
      !this.adjacencyList[vertex2].includes(vertex1) &&
      vertex1 !== vertex2
    ) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
      return true;
    }
    return false;
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    while (this.adjacencyList[vertex].length) {
      let temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencyList[vertex];
    return this;
  }
}

// ============== Creating a graph =================

let myGraph = new Graph();
console.log(myGraph.addVertex("A"));
console.log(myGraph.addVertex("B"));
console.log(myGraph.addVertex("C"));
console.log(myGraph.addVertex("A"));
console.log(myGraph);

// Add a edge

console.log(myGraph.addEdge("A", "B"));
console.log(myGraph.addEdge("A", "B"));
console.log(myGraph.addEdge("C", "B"));
console.log(myGraph.addEdge("A", "A"));
console.log(myGraph);

// Remove an edge

console.log(myGraph.removeEdge("B", "C"));
console.log(myGraph);

// Remove a vertex

let myGraph2 = new Graph();
console.log(myGraph2.addVertex("A"));
console.log(myGraph2.addVertex("B"));
console.log(myGraph2.addVertex("C"));
console.log(myGraph2.addVertex("D"));
console.log(myGraph2);

console.log(myGraph2.addEdge("A", "B"));
console.log(myGraph2.addEdge("A", "C"));
console.log(myGraph2.addEdge("A", "D"));
console.log(myGraph2.addEdge("D", "B"));
console.log(myGraph2.addEdge("D", "C"));
console.log(myGraph2);

console.log(myGraph2.removeVertex("D"));
console.log(myGraph2.removeVertex("E")); // edge case
// console.log(myGraph2);
