function distributeGifts(packOfGifts, reindeers) {
  let packSize = packOfGifts
  .reduce( (acc, gift) => acc + gift.length, 0)
  let reindeerForce = reindeers
  .reduce( (acc, reindeer) => acc + reindeer.length * 2, 0)

  return Math.trunc(reindeerForce/packSize)
}
