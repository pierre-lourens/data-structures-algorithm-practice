/*
Title: LC. 3 Longest substring without repeating characters
URL: https://leetcode.com/problems/longest-substring-without-repeating-characters/

Takeaway: two pointers still work here. you can use the size of the window to know when to advance
This solution uses a set.
Another approach would be to use a map with keys being the string and values being the counts.
Then instead of `while(windowSize > uniques.size)` you could use `while(counts[r] > 1)` 
*/
function lengthOfLongestSubstring(s: string): number {
  if (s.length < 2) {
    return s.length;
  }
  const uniques: Set<string> = new Set();
  let left = 0;
  let right = 1;

  uniques.add(s[left]);
  uniques.add(s[right]);
  let maxLength = uniques.size;

  while (right < s.length - 1) {
    let windowSize = getWindowSize(right, left);
    while (windowSize > uniques.size) {
      if (s[left] !== s[right]) {
        uniques.delete(s[left]);
      }
      left++;
      windowSize = getWindowSize(right, left);
    }
    right++;
    uniques.add(s[right]);
    maxLength = Math.max(uniques.size, maxLength);
  }
  return maxLength;
}

const getWindowSize = (right: number, left: number) => right - left + 1;
