/*
Title: 100. Same tree
URL: https://leetcode.com/problems/same-tree/description/
p
Note: A simple traversal works, just need to add base cases to reflect the checking.
*/

function isSameTree(p, q) {
  if (!p && !q) {
    return true;
  }
  if ((!p && q) || (!q && p)) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
