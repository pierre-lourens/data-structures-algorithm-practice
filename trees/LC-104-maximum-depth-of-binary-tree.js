/*
Title: 104. Maximum depth of binary tree.
URL: https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

Note: Easy problem, good warm up. Basically shows DFS. 

*/

function maxDepth(root) {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
