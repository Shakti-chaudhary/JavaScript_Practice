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
}

// ============== Creating a graph =================

let myGraph = new Graph();
console.log(myGraph.addVertex("A"));
console.log(myGraph.addVertex("B"));
console.log(myGraph.addVertex("A"));
console.log(myGraph);

// Add a edge

console.log(myGraph.addEdge("A", "B"));
console.log(myGraph.addEdge("A", "B"));
console.log(myGraph.addEdge("A", "A"));
console.log(myGraph);
