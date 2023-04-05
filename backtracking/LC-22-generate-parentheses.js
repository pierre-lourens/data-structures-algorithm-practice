/* 
Title: LC. 22 - Generate parentheses
URL: https://leetcode.com/problems/combination-sum/description/

Notes: 
- Classic backtracking problem, NP complete. 
 */
var generateParenthesis = function(n) {
    const result = [];
    dfs();
    return result;

    function dfs(strArr = [], numOpen = 0, numClosed = 0) {
        const usedAllPairs = numOpen + numClosed === n * 2;
        if (usedAllPairs) {
            const str = strArr.join('');
            result.push(str);
            return;
        }
        if (numOpen < n) {
            strArr.push('(');
            dfs(strArr, numOpen + 1, numClosed);
            strArr.pop();
        }
        if (numClosed < numOpen) {
            strArr.push(')');
            dfs(strArr, numOpen, numClosed + 1);
            strArr.pop();
        }
    }    
};