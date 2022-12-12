function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let maxGiftsValid = 0
  const cityLength = giftsCities.length
  return giftsCities.forEach( (city, idx) => {
    let cityCount = 0
    let acc = 0

    for(idx; idx < cityLength; idx++) {
      if(cityCount === maxCities) break
      if(acc + giftsCities[idx] <= maxGifts) {
      acc += giftsCities[idx]
      cityCount++
      }
    }
    (acc > maxGiftsValid) && (maxGiftsValid = acc)
  }), maxGiftsValid
}
