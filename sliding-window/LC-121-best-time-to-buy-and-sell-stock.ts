/*
LC 121 - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

A key pattern with this problem is to use two pointers.
You can start the right pointer on the second element in the array because if there are fewer than 2 prices, you can assume the profit to be 0.
*/
function maxProfit(prices: number[]): number {
  if (prices.length < 2) {
    return 0;
  }

  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    while (prices[left] > prices[right]) {
      left++;
    }
    const profit = prices[right] - prices[left];
    max = Math.max(profit, max);
    right++;
  }
  return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5);
