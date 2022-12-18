// yo mero
function carryGifts(gifts, maxWeight) {
  if(gifts.every(g => g.length > maxWeight)) return []
  let tempGifts = []
  let separateGifts = []
  let giftWeight = 0

  gifts.forEach((gift) => {
    if(giftWeight + gift.length > maxWeight) {
      giftWeight = 0
      separateGifts.push(tempGifts.join(" "))
      tempGifts = []
    }

    giftWeight += gift.length
    tempGifts.push(gift)
  })

  separateGifts.push(tempGifts.join(" "))

  return separateGifts
}

//un wey random del canal de discord de midudev
function carryGifts(gifts, maxWeight) {
  return gifts.join(' ')
  .match(new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, 'g')) || [];
}
