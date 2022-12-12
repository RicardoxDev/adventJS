function getCompleted(part, total) {
  part = part.split(":")
  total = total.split(":")
  
  const partRed = +part[0] * 3600 + +part[1] * 60 + +part[2]
  const totalRed = +total[0] * 3600 + +total[1] * 60 + +total[2]
  let tempPart = partRed
  let tempTotal = totalRed
  
  let MCD;
  while(tempTotal) {
      MCD = tempTotal
      tempTotal = tempPart % tempTotal
      tempPart = MCD
  }

 return (partRed/MCD) + "/" + (totalRed/MCD)
}
