function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50]
  let codeChange = [0, 0, 0, 0, 0, 0]
  for(let i = coins.length - 1; i >= 0; i--) {
    if(coins[i] <= change) {
      change = change - coins[i]
      codeChange[i]++
      i++
    }
    console.log(change)
  }
  return codeChange
}

getCoins(51)
