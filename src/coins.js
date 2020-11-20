const coinChange = (coins, amount) => {
  let dp = [0];
  for(let i = 1; i <= amount; i++) {
    dp[i] = Number.MAX_SAFE_INTEGER;
  }

  for(let i = 1; i <= amount; i++) {
     coins.forEach((coin) => {
       if(i >= coin) {
         dp[i] = Math.min(dp[i], dp[i - coin]+1);
       }
     });
  }

  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};

coinChange([1,2,5], 11);