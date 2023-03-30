/* 
Title: LC. 78 - Subsets
URL: https://leetcode.com/problems/subsets/

Notes: 
- The reason the time complexity is n * 2^n is because for n elements, you are making two choices (keep or not)
 */
var subsets = function(nums) {
    const result = [];
    const subset = [];
    
    function helper(idx) {
        if (idx >= nums.length) {
            result.push([...subset])
            return;
        }
        subset.push(nums[idx]);
        helper(idx + 1)
        subset.pop();
        helper(idx + 1);
    }
    
    helper(0);
    return result;
};