function getCompleted(part: string, total: string) {
  const formatPart = part.split(":").map((num) => +num)
  const formatTotal = total.split(":").map((num) => +num)
  
  const partRed = formatPart[0] * 3600 + formatPart[1] * 60 + formatPart[2]
  const totalRed = formatTotal[0] * 3600 + formatTotal[1] * 60 + formatTotal[2]
  let tempPart = partRed
  let tempTotal = totalRed
  
  let MCD: number;
  while(tempTotal) {
      MCD = tempTotal
      tempTotal = tempPart % tempTotal
      tempPart = MCD
  }

 return (partRed/MCD) + "/" + (totalRed/MCD)
}
