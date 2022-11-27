function shouldBuyFidelity(times) {
  const normalTicket = 12
  const fidelityCard = 250
  
  let fidelityPrice = 250
  let normalPrice = 0
  for(let i = 1; i <= times; i++) {
    normalPrice += 12
    fidelityPrice += 12*(0.75**i)
  }
  return normalPrice > fidelityPrice
}
