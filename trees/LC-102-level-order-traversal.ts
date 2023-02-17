/*
Title: 102. Binary Tree Level Order Traversal
URL: https://leetcode.com/problems/binary-tree-level-order-traversal/description/

Note: Easy problem. Simple BFS / queue prob.
*/

class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function levelOrder(root: TreeNode | null): number[][] {
  const output: number[][] = [];
  if (!root) return output;

  const queue = [root];

  while (queue.length > 0) {
    const lengthOfLevel = queue.length;
    const level: number[] = [];

    for (let i = 0; i < lengthOfLevel; i++) {
      const current = queue.shift();
      if (!current) continue;

      level.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    output.push(level);
  }
  return output;
}
