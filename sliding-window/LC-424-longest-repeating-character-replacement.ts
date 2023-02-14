/* 
Title: 424. Longest Repeating Character Replacement
URL: https://leetcode.com/problems/longest-repeating-character-replacement/description/

Notes: 
- Didn't love the amount of code my intuitive solution requires.
- Another downside -- lots of repeate work on the isKExceeded. 
*/

function characterReplacement(s: string, k: number): number {
  const counts: Map<string, number> = new Map();
  let left = 0;
  let right = 0;
  let maxCount = 0;

  while (right < s.length) {
    const currentRightCount = counts.get(s[right]);
    counts.set(s[right], currentRightCount ? currentRightCount + 1 : 1);

    let kExceeded = isKExceeded(k, counts);

    while (kExceeded) {
      const currentLeftCount = counts.get(s[left]);
      counts.set(s[left], currentLeftCount ? currentLeftCount - 1 : 0);
      left++;
      kExceeded = isKExceeded(k, counts);
    }
    maxCount = Math.max(maxCount, right - left + 1);
    right++;
  }
  return maxCount;
}

function isKExceeded(k, counts: Map<string, number>) {
  let max: number = -Infinity;
  let maxKey = '';

  counts.forEach((value, key) => {
    max = Math.max(max, value);
    if (max === value) {
      maxKey = key;
    }
  });

  let runningK = k;

  for (const [key, value] of counts) {
    if (key === maxKey) {
      continue;
    }
    runningK -= value;
    if (runningK < 0) {
      return true;
    }
  }
  return false;
}
