/*
Title: Is symmetric tree

Note: Maybe there's a better implementation but this is what was intuitive to me on a timed drill.
      Important that you have a separate left and right array so that the check can be done, 
      else you don't know from which branch the value came.
*/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
/*
       1
    2     2       
 3   4  4   3
 
        1
    2     2
      3     3
 

      will
*/
// return true if the tree is symmetric, false if not
function solution(t) {
  if (!t) return true;

  const queue = [t];

  while (queue.length) {
    const levelLen = queue.length;

    const left = [];
    const right = [];
    for (let i = 0; i < levelLen; i++) {
      const curr = queue.shift();

      if (curr.left) {
        left.push(curr.left.value);
        queue.push(curr.left);
      }
      if (curr.right) {
        right.push(curr.right.value);
        queue.push(curr.right);
      }
    }
    if (!isSymmetric(left, right)) return false;
  }
  return true;
}

function isSymmetric(left, right) {
  if (left.length !== right.length) return false;

  for (let i = 0; i < left.length; i++) {
    const j = left.length - 1 - i;

    if (left[i] !== right[j]) return false;
  }
  return true;
}
