function canReconfigure(from, to) {
  from = from.split("")
  to = to.split("")
  let isValid = true
  
  if(from.length !== to.length) return false
  for(let i = 0; i < from.length; i++) {
    for(let idx = i + 1; idx < from.length; idx++) {
      if(from[i] === from[idx] && to[i] !== to[idx]) isValid = false
      if(from[i] !== from[idx] && to[i] === to[idx]) isValid = false
    }
  }
  
  return isValid
}
