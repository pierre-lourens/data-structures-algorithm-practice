/* 
Title: LC. 14 - Longest common prefix
URL: https://leetcode.com/problems/longest-common-prefix/

Notes:
- don't be misled by nested loops, it is still O(N) in the worst case, where n is the length of the shortest word
 */

function longestCommonPrefix(strs: string[]): string {
  let res = "";

  for (let i = 0; i < strs[0].length; i++) {
    for (const str of strs) {
      if (i === str.length || str[i] !== strs[0][i]) {
        return res;
      }
    }
    res += strs[0][i];
  }
  return res;
}
