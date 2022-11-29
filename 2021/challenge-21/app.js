function canCarry(capacity, trip) {
  let gifts = []
  let start = []
  let end = []
  let giftsCount = 0
  let isValid = true
  trip.forEach(rout => {
    gifts.push(rout[0])
    start.push(rout[1])
    end.push(rout[2])
  })
  
  for(let i = 0; i <= 10 ; i++) {
    for(let idx = 0; idx < trip.length; idx++) {
      if(i === start[idx]) {
        giftsCount += gifts[idx]
      }
      if(i === end[idx]) {
        giftsCount -= gifts[idx]
      }
    }
    
    if(giftsCount > capacity) {
       isValid = false
     }
  }

  return isValid
}
