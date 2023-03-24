//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
/*
            5
        2       10
         8

a violating node is the first in the tree which disobeys the rules of a BST.
e.g. 8 above
*/
function findViolatingNode(root) {
    const answer = helper(root, -Infinity, Infinity);
    
    return answer !== null ? answer : -1;
    
    function helper(node, min, max) {
        if (!node) {
            return null;
        }
        const curr = node.value;
        
        if (curr >= max || curr <= min) {
            return curr;
        }
        
        return helper(node.left, min, node.value) || helper(node.right, node.value, max);
    }
}
