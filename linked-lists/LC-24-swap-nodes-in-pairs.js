/*
Title: LC. 24 - Merge intervals
URL: https://leetcode.com/problems/swap-nodes-in-pairs/description/

Notes: 
- I prefer the recursive solution because it is a bit more elegant.
*/
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const firstNode = head;
  const secondNode = head.next;

  firstNode.next = swapPairs(secondNode.next);
  secondNode.next = firstNode;

  return secondNode;
};
