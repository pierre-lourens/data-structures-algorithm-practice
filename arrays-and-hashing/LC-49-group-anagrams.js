/* 
Title: LC. 49 - Group anagrams
URL: https://leetcode.com/problems/group-anagrams/

Notes: 
- Tradeoffs -- legibility. focus here is on being pragmatic.
 */
var groupAnagrams = function (strs) {
  const groupedByAlph = new Map();

  for (const word of strs) {
    const alphabetized = word.split('').sort().join('');
    if (!groupedByAlph.has(alphabetized)) {
      groupedByAlph.set(alphabetized, [word]);
    } else {
      const curr = groupedByAlph.get(alphabetized);
      const currExtended = [...curr, word];
      groupedByAlph.set(alphabetized, currExtended);
    }
  }
  const res = [];
  for (const [key, group] of groupedByAlph) {
    res.push(group);
  }
  return res;
};
