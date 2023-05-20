/* 
Title: LC. 11 - Container with most water
URL: https://leetcode.com/problems/container-with-most-water/description/

Notes: 
- This is a good example of one where drawing/sketching is helpful
- Ok to think of brute force first
 */

// O(N) two pointer solution
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  while (left < right) {
    const width = right - left;
    const area = width * Math.min(height[left], height[right]);
    result = Math.max(area, result);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return result;
}

// brute force, O(N^2)
var bruteForcemaxArea = function (height) {
  let result = 0;

  for (let left = 0; left < height.length; left++) {
    for (let right = left + 1; right < height.length; right++) {
      const area = (right - left) * Math.min(height[left], height[right]);
      result = Math.max(area, result);
    }
  }
  return result;
};
