function maxProfit(prices) {
  let profit = 1
  let arrProfits = []
  for(let i = 0; i < prices.length - 1; i++) {
    for(let idx = i + 1; idx < prices.length; idx++) {
      arrProfits.push(prices[idx] - prices[i])
    }
  }

  if(Math.max(...arrProfits) > profit) profit = Math.max(...arrProfits)
  return profit === 1 
    ? -1 
    : profit
}
