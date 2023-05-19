/*
recreate indexOf; don't use helper functions
*/
function solution(string, target) {
  if (target.length > string.length) return -1;

  let left = 0;

  while (left <= string.length - target.length) {
    let right = left;
    let count = 0;
    while (string[right] === target[count] && count < target.length) {
      right++;
      count++;
    }
    if (count === target.length) {
      return left;
    }
    left++;
  }
  return -1;
}
