function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  const reindeerForce = reindeers.join("").length() * 2
  const packSize = packOfGifts.join("").length
  
  return Math.trunc(reindeerForce/packSize)
}
