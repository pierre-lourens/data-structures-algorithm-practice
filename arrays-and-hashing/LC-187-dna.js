/*
LC 187. Repeated DNA Sequences
URL: https://leetcode.com/problems/repeated-dna-sequences/description/

Notes: 
- There's a more complicated way to solve this with charcodes.. but this is more legible IMO.
- Takeaway: use extra space as a trade off for faster run time -- O(N) where N is the num of letters

*/
var findRepeatedDnaSequences = function(s) {
    const combos = new Set();
    const duplicates = new Set();

    for (let i = 0; i < s.length - 9; i++) {
        const str = s.substring(i, i+10);

        if (combos.has(str)) {
            duplicates.add(str);
        } else {
            combos.add(str);
        }
    }
    return Array.from(duplicates);
};