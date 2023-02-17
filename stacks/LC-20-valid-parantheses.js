/*
Title: 20. Valid Parentheses
URL: https://leetcode.com/problems/valid-parentheses/

Note: Easy problem.. Good way to practice stacks. Using maps is still constant space bc they don't expand
     as n grows, and they clean up the checking. 
*/
/**
 * @param {string} s
 * @return {boolean}
 */
/*
 */
var isValid = function (s) {
  const open = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);
  const close = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const topOfStackAtStart = stack[stack.length - 1];

    if (open.has(current)) {
      stack.push(current);
    } else if (close.has(current)) {
      const expected = close.get(current);
      if (topOfStackAtStart !== expected) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};
