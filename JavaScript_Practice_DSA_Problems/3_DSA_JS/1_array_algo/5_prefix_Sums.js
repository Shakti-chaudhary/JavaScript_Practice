// ============ Prefix Sums ===================

class PrefixSum {
  constructor(nums) {
    this.prefix = new Array();
    let total = 0;
    for (let n of nums) {
      total += n;
      this.prefix.push(total);
    }
  }

  rangeSum(left, right) {
    let preRight = this.prefix[right];
    let preLeft = left > 0 ? this.prefix[left - 1] : 0;
    return preRight - preLeft;
  }
}
let ps = new PrefixSum([2, -1, 3, -3, 4]);
// let ps = new PrefixSum([1, 2, 3, 4, 5]); // 9
console.log(ps.prefix);
console.log(ps.rangeSum(3, 4));
