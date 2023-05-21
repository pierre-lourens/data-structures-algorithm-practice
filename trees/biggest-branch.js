// max sum of nodes from root to any leaf

function solution(root) {
  if (!root) return 0;

  let sum = root.value;
  return Math.max(sum + solution(root.left), sum + solution(root.right));
}
