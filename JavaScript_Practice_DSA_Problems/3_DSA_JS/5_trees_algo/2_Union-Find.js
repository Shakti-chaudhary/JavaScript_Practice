// ============ Union-Find ( Disjoint sets ) ===============

class UnionFind {
  constructor(n) {
    this.par = new Map();
    this.rank = new Map();
    for (let i = 1; i < n + 1; i++) {
      this.par.set(i, i);
      this.rank.set(i, 0);
    }
  }
}
