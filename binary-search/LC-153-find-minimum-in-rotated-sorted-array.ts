/*
Title: LC. 153 - Find minimum in rotated sorted array.
URL: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

Notes: 
- Binary search problem, just with a twist of a pivot.
- Time complexity (log n) 
*/
function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  let result: number = nums[0];

  while (left <= right) {
    if (nums[left] < nums[right]) {
      result = Math.min(result, nums[left]);
      break;
    }
    const mid = Math.floor(left + (right - left) / 2);
    result = Math.min(result, nums[mid]);
    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}
