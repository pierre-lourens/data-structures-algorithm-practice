/*
Title: 167. Two Sum II - Input Array Is Sorted
URL: https://leetcode.com/problems/valid-palindrome/description/

Notes: 
- take advantage of sorted. you can infer when to move either pointer
  based on the sum. 

*/
function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [-1, -1];
}
