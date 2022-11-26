function missingReindeer(ids) {
  ids.sort( (a, b) => { return a-b })
  let lastId = ids[0]
  let ReindeerId = 0
  let hasReindeer = false
  
  const missingReind = ids.forEach( (id) => {
    if(id === ids[0]) return
    if(lastId + 1 !== id) {
      ReindeerId = lastId + 1
      hasReindeer = true
    }
    lastId = id
  })
  
  if(!hasReindeer) ReindeerId = ids[ids.length - 1] + 1
  return ids[0] === 1 ? 0 : ReindeerId
}

missingReindeer([0, 2, 3]) // -> 1

