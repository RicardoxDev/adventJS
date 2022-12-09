function wrapping(gifts){ 
  return gifts.map(gift => {
    const wrap= "*".repeat(gift.length + 2)
    return wrap + "\n*" + gift + "*\n" + wrap
  })
}
