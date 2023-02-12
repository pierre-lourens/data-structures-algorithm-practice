/*
Title: Coin change number of ways
Type: Dynamic progrmaming

Notes: 
- use index in top down solution to know which coins have been tried before. 
  (permutation vs combination)
- in top down approach, use difference and previous row value for valid coins, else use 
  previous row value.
*/

/* Q. Given coins of different denominations (e.g. cent, dime, quarter in U.S. currency) and a total amount of money, calculate the number of combinations to make up the target amount. You may assume there are infinite number of each kind of coin. 
Examples:
• Given: amount = 2, coins = [1, 2, 3] // returns 2
• Possible Combinations: (2 = 2), (2 = 1+1)
• Given amount = 5, coins = [1, 2, 5] // returns 4
• Possible Combinations: (5 = 1 + 1 + 1 + 1 + 1), (5 = 2 + 1 + 1 + 1), (5 = 2 + 2 + 1), (5 = 5)
*/
/*
topdown approach: 
  basecases: 0 remaining or less. if 0, return 1. 
  try other coins. use index to not repeat coins tried. 
*/
function numberOfWaysBottomUp(amount, coins) {
  const dp = Array(coins.length + 1);
  for (let coinI = 0; coinI < dp.length; coinI++) {
    dp[coinI] = Array(amount + 1).fill(0);
    dp[coinI][0] = 1;
  }
  for (let coinI = 1; coinI < dp.length; coinI++) {
    for (let subAmount = 1; subAmount <= amount; subAmount++) {
      const currentCoin = coins[coinI - 1];
      const isCoinValid = currentCoin <= subAmount;
      if (!isCoinValid) {
        dp[coinI][subAmount] += dp[coinI - 1][subAmount];
      } else {
        const diff = subAmount - currentCoin;
        dp[coinI][subAmount] += dp[coinI - 1][subAmount] + dp[coinI][diff];
      }
    }
  }
  return dp[coins.length][amount];
}

// console.log(numberOfWaysBottomUp(2, [1,2,5])) // 2
// console.log(numberOfWaysBottomUp(5, [1,2,5])) // 2

function numberOfWays(amount, coins) {
  const cache = Array(amount + 1);
  for (let subAmount = 0; subAmount < cache.length; subAmount++) {
    cache[subAmount] = Array(coins.length).fill(0);
  }
  const ans = helper(amount, 0);
  return ans;

  function helper(amountRemaining, indexToStart) {
    if (amountRemaining === 0) {
      return 1;
    } else if (amountRemaining < 0) {
      return 0;
    }

    let numWays = 0;

    for (let i = indexToStart; i < coins.length; i++) {
      if (coins[i] > amountRemaining) continue;
      const cacheHit = cache[amountRemaining - coins[i]][i];
      if (cacheHit) {
        numWays += cacheHit;
      } else {
        const ans = helper(amountRemaining - coins[i], i);
        cache[amountRemaining - coins[i]][i] = ans;
        numWays += ans;
      }
    }

    return numWays;
  }
}
// console.log(numberOfWays(5, [1,2,5])) // 2
