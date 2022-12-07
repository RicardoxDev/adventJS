function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let maxGiftsValid = 0
    const cityLength = giftsCities.length
  giftsCities.forEach( () => {
    let cityCount = 0
    let acc = 0

    for(let idx = 0; idx < cityLength; idx++) {
      if(cityCount === maxCities) break
      if(acc + giftsCities[idx] <= maxGifts) {
        acc += giftsCities[idx]
        cityCount++
      }
    }
    if(acc > maxGiftsValid) maxGiftsValid = acc
    
    giftsCities.push(giftsCities.shift())
  })
  
  return maxGiftsValid
}
