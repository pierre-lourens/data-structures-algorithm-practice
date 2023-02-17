/*
Title: 226. Invert Binary Tree
URL: https://leetcode.com/problems/invert-binary-tree/description/

Note: Useful to think about preorder, postorder, or inorder DFS.

*/
function invertTree(root) {
  if (!root) {
    return null;
  }
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}
