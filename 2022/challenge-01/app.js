function wrapping(gifts){ 
  const solve = () => {
    return gifts.map(gift => {
  	  const wrap= "*".repeat(gift.length + 2)
  	  return wrap + "\n*" + gift + "*\n" + wrap
    })
  }
  
  return solve()
}
