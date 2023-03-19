/*
Title: 98. Validate Binary Search Tree
URL: https://leetcode.com/problems/validate-binary-search-tree/

Note: Overall the important thing with this problem is understanding the nature of binary search trees and the need to pass
      a min value and max value down to account for violations that span distances greater than parent/child
*/
function isValidBST(root) {
  return dfs(root);

  function dfs(node, min = -Infinity, max = Infinity) {
    if (!node) {
      return true;
    }
    const leftViolation = node.val > max;
    const rightViolation = node.val < min;
    if (leftViolation || rightViolation) {
      return false;
    }

    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
  }
}
