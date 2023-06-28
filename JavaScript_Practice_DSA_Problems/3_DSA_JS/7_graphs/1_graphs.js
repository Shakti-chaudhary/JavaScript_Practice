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
}

let myGraph = new Graph();
console.log(myGraph.addVertex("A"));
console.log(myGraph.addVertex("A"));
console.log(myGraph);
