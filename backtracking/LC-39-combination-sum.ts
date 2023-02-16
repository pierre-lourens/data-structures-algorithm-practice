/* 
Title: LC. 39 - Combination Sum
URL: https://leetcode.com/problems/combination-sum/description/

Notes: 
- Classic backtracking problem, NP complete. 
- Time complexity: N^depth, where depth = target / smallest candidate num
 */
function combinationSum(candidates: number[], target: number): number[][] {
  const output: number[][] = [];

  dfs(0, 0, []);

  function dfs(index: number, sum: number, stack: number[]) {
    if (sum === target) {
      output.push([...stack]);
      return;
    }
    for (let j = index; j < candidates.length; j++) {
      const currentNum = candidates[j];
      const newSum = sum + currentNum;
      if (newSum > target) {
        continue;
      }
      stack.push(currentNum);
      dfs(j, newSum, stack);
      stack.pop();
    }
  }
  return output;
}
/*
[2,3,6,7] target 7
2+2+3 = 7
  note, order doesn't matter (3+2+2) is not different.
7 = 7

                                      ()
                      (2)                   (3)
                (2,2)                (3,3)    (3,6)  (3,7)
            (2,2,2)   
        (2,2,2,2) 

don't recreate 2,2,3

base cases: 
- over target 
  return
- equal to target
   add a copy of the stack to our output?
   return 

recursive case is less than the target
  try each option 


ingredients:
global output
stack
dfs helper -> index and stack  
*/
/*
[2,3,6,7]

[2], target 10 


*/
