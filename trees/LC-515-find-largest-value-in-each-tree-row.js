/*
Title: 515. Find Largest Value in Each Tree Row
URL: https://leetcode.com/problems/find-largest-value-in-each-tree-row/description/

Notes: good practice for level order traversal. Don't forget to unshift rather than pop.

*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function largestValues(root) {
  if (!root) return [];
  const queue = [root];

  const result = [];

  while (queue.length) {
    const levelLen = queue.length;

    let localMax = -Infinity;
    for (let i = 0; i < levelLen; i++) {
      const curr = queue.shift();
      localMax = Math.max(curr.val, localMax);

      if (curr.right) {
        queue.push(curr.right);
      }
      if (curr.left) {
        queue.push(curr.left);
      }
    }
    result.push(localMax);
  }
  return result;
}
