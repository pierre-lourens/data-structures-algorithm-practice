/*
Title: LC. 125 - Valid Palindrome
URL: https://leetcode.com/problems/valid-palindrome/description/

Notes: 
- could save on some time if I skipped the function to convert to lowercase.
  But balancing style/readability. Either way it O(N)
  Skipping would require some more complicate logic in the left -> right <- 
  pointer loop.

*/
// convert all letters to lowercase. ignore spaces and punctuation
// helper methods: compare reversed string to original string.
// non-helper method: use two pointers, comparing chars until we cross over
/*
Ra.c.ecar
^

*/
function isPalindrome(s: string): boolean {
  const lowerCaseStr = convertToLowerCaseCharsOnly(s);
  let left = 0;
  let right = lowerCaseStr.length - 1;

  while (left < right) {
    const notEqual = lowerCaseStr[left] !== lowerCaseStr[right];
    if (notEqual) return false;
    left++;
    right--;
  }
  return true;
}

function convertToLowerCaseCharsOnly(s: string): string {
  const lowerCaseArray = s
    .split('')
    .filter((char) => {
      const isAlphaNumeric =
        (char >= 'A' && char <= 'Z') ||
        (char >= 'a' && char <= 'z') ||
        (char >= '0' && char <= '9');
      return isAlphaNumeric;
    })
    .map((alphaChar) => alphaChar.toLowerCase());
  return lowerCaseArray.join('');
}
