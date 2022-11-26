function sumPairs(numbers, result) {
  let arrPair = null
  let idx = 1
  for(let i = 0; i < numbers.length; i++) {
    if(idx > 1) idx = i + 1
    
    while(idx < numbers.length) {
      if(arrPair) break
      if(numbers[i] + numbers[idx] === result) {
        arrPair = [numbers[i], numbers[idx]]
        break
      }
      
      idx++
    }
  }
  
  return arrPair ?? null
}

sumPairs([0, 2, 2, 3, -1, 1, 5], 4)
