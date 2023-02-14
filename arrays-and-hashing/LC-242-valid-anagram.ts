/* 
Title: LC. 242 - Valid anagram
URL: https://leetcode.com/problems/valid-anagram/description/

Notes: 
- Chose to use a map rather than sorting to save time complexity. 
- Tradeoffs -- to use constant space, could simply sort the strings and compare them.
  That is O(n log n) most likely.
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const counts: Map<string, number> = new Map();
  for (let i = 0; i < s.length; i++) {
    const currLetter = s[i];
    const currCount = counts.get(currLetter) || 0;
    counts.set(currLetter, currCount + 1);
  }

  for (let i = 0; i < t.length; i++) {
    const currLetter = t[i];
    const currCount = counts.get(currLetter);
    if (currCount === undefined || currCount < 1) {
      return false;
    }
    counts.set(currLetter, currCount - 1);
  }
  return true;
}
