/*
Given a string, a target string, and a frequency f, remove the target f number of times from the beginning of the input string. If f exceeds the number of target strings appeared in the input string, do nothing.

*/
function solution(string, target, f) {
  if (f <= 0) return string;

  let result = "";
  let left = 0;
  let timesOccured = 0;

  while (left < string.length) {
    let right = left;
    let count = 0;
    while (string[right] === target[count] && count < target.length) {
      right++;
      count++;
    }
    const traversedWholeTarget = count === target.length;
    if (traversedWholeTarget && timesOccured < f) {
      left = right;
      timesOccured++;
      continue;
    }
    result += string[left];
    left++;
  }

  return f > timesOccured ? string : result;
}
