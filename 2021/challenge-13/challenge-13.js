function wrapGifts(gifts) {
  let giftSpace = 0
  let giftBody = []
  gifts.forEach(gift => {
    giftSpace = gift.length
    if(!giftBody.length) giftBody.push(`*${"*".repeat(giftSpace)}*`)
    giftBody.push(`*${gift}*`)
  })
  
  giftBody.push(`*${"*".repeat(giftSpace)}*`)
  return giftBody
}
