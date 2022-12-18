function dryNumber(dry, numbers) {
  let notPrintable = []
  let currentNum = 1
  while(currentNum <= numbers) {
    String(currentNum).includes(dry) && notPrintable.push(currentNum)
    currentNum++
  }
  
  return notPrintable
}
