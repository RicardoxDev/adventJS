function distributeGifts(packOfGifts, reindeers) {
  let packSize = 0
  let reindeerForce = 0

  packOfGifts.forEach( gift => packSize += gift.length)
  reindeers.forEach( reindeer => reindeerForce += reindeer.length * 2)
  
  return Math.trunc(reindeerForce/packSize)
}
