function countDecorations(bigTree) {
  let itemsNum = 0
  for(const item in bigTree) {
    if(bigTree[item] === null) continue
    if(bigTree[item] instanceof Object) {
      itemsNum += countDecorations(bigTree[item])
    } else {
      itemsNum += bigTree[item]
    }
  }
  
  return itemsNum
}

// Version Two

function countDecorations(bigTree) {
  let itemsNum = 0
  Object.values(bigTree).forEach(value => {
    if(value === null) return
    if(value instanceof Object) {
      itemsNum += countDecorations(value)
    } else {
      itemsNum += value
    }
  })
  
  return itemsNum
}
