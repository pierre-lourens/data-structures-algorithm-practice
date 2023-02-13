/* 
Title: LC. 76 - Minimum window substring
URL: https://leetcode.com/problems/minimum-window-substring/description/

Notes: 
- This is a workable two pointer solution, but there are improvements to time/space complexity 
  (having to check the counts so much)
 */
function minWindow(s, t) {
  if (t.length > s.length) return '';
  let left = 0;
  let right = 0;
  const countsS = new Map();

  const countsT = new Map();
  for (let i = 0; i < t.length; i++) {
    const currCount = countsT.get(t[i]) || 0;
    countsT.set(t[i], currCount + 1);
  }
  let smallestRange = Infinity;
  let answerLeft;
  let answerRight;
  while (left < s.length) {
    while (!isValid(countsS, countsT) && right < s.length) {
      const currCount = countsS.get(s[right]) || 0;
      countsS.set(s[right], currCount + 1);
      right++;
    }
    if (isValid(countsS, countsT)) {
      smallestRange = Math.min(smallestRange, right - left);
      if (right - left === smallestRange) {
        console.log({ left, right });
        answerLeft = left;
        answerRight = right;
      }
    }
    const currCount = countsS.get(s[left]) || 0;
    countsS.set(s[left], currCount - 1);
    left++;
  }
  return answerLeft !== undefined && answerRight !== undefined
    ? s.slice(answerLeft, answerRight)
    : '';
}

function isValid(counts, targetCounts) {
  for (const [key] of targetCounts) {
    if (!counts.has(key) || counts.get(key) < targetCounts.get(key)) {
      return false;
    }
  }
  return true;
}
