/*
Title: LC. 56 - Merge intervals
URL: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

Notes: 
- Fun one... really benefits from sorting and use of a stack
*/
var merge = function(intervals) {
    const result = [];    
    const sorted = intervals.sort((a,b) => a[0] - b[0]);

    for (const interval of sorted) {
        const lastResult = result[result.length - 1];
        if (lastResult && interval[0] <= lastResult[1]) {
            const newResult = [lastResult[0], Math.max(lastResult[1], interval[1])]
            result[result.length - 1] = newResult;
        } else {
            result.push(interval)
        }
    }

    return result;
};