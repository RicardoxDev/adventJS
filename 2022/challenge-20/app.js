function howManyReindeers(reindeerTypes, gifts) {
  let reindeersFromCountry = [];
  reindeerTypes = reindeerTypes.sort((a, b) => a.weightCapacity - b.weightCapacity)
  
  gifts.forEach((gift) => {
    let {country, weight} = gift
    let result = {country, reindeers: []}
    
    while(weight > 0) {
      for(const type in reindeerTypes) {
        if(!reindeerTypes[type].num) reindeerTypes[type].num = 0;
        if(weight - reindeerTypes[type].weightCapacity >= 0) {
          weight -= reindeerTypes[type].weightCapacity;
          reindeerTypes[type].num++
        }
      }
    }
    
    for(const type in reindeerTypes) {
      if(reindeerTypes[type].num) { result.reindeers.push({
          type: reindeerTypes[type].type,
          num: reindeerTypes[type].num
        })
      }
      reindeerTypes[type].num = 0
    }
    reindeersFromCountry.push(result)
  })
  
  return reindeersFromCountry.map((el) => {
    let {country, reindeers} = el
    return {country, reindeers: reindeers.reverse()}
  })
}
