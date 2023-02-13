/*
Title: LC. 300 - Longest Increasing Subsequence
URL: https://leetcode.com/problems/longest-increasing-subsequence/description/

Notes: 
- work backwards, knowing that our last element has length one.

*/
function lengthOfLIS(nums: number[]): number {
  const dp = Array(nums.length).fill(1);

  for (let i = nums.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
}
