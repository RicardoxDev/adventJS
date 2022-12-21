function printTable(gifts) {
  let maxGift = Math.max(...gifts.map(el => el.name.length), 4)
  let maxQuantity = Math.max(...gifts
   .map(el => String(el.quantity)
   .length), 8)
  
  let body = "+".repeat(maxGift + maxQuantity + 7) + "\n";
  body += "| Gift" + " ".repeat(maxGift - 4);
  body += " | Quantity" + " ".repeat(maxQuantity - 8) + " |" + "\n";
  body += "| " + "-".repeat(maxGift) + " | " + "-"
   .repeat(maxQuantity) + " |" + "\n";
  
  gifts.forEach((gift) => {
   body += "| " + gift.name + " ".repeat(maxGift - gift.name.length)
   body += " | " + gift.quantity
   body += " ".repeat(maxQuantity - String(gift
    .quantity).length) + " |\n"
  })
  
  body += "*".repeat(maxGift + maxQuantity + 7)
  return body
}
