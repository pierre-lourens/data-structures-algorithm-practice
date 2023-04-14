/*
Given a binary tree and a depth, remove all nodes that are lower than that depth.


*/
//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
/*
        
*/
function removeNodesGreaterThanDepth(root, depth) {
  const queue = [root];

  let currentDepth = 0;
  while (queue.length) {
    const len = queue.length;

    // consider whole level
    for (let i = 0; i < len; i++) {
      const curr = queue.shift();
      if (currentDepth === depth) {
        curr.left = null;
        curr.right = null;
        continue;
      }
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    currentDepth++;
  }
  return root;
}
