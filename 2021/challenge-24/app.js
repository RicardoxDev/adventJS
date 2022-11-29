function checkIsSameTree(treeA, treeB) {
  let isValid = true
  
  const treeASame = (treeA) => {
    let treeAValue = 0
    for(const itemA in treeA) {
      if(treeA[itemA] === null) continue
      if(treeA[itemA] instanceof Object) {
        treeAValue += treeASame(treeA[itemA], null)
      } else {
        treeAValue += treeA[itemA]
      }
    }
    return treeAValue
  }
  
  const treeBSame = (treeB) => {
   let treeBValue = 0
   for(const itemB in treeB) {
     if(treeB[itemB] === null) continue
     if(treeB[itemB] instanceof Object) {
       treeBValue += treeBSame(treeB[itemB])
     } else {
       treeBValue += treeB[itemB]
     }  
   } 
    return treeBValue
  }
  
  treeASame(treeA) === treeBSame(treeB)
    ? isValid = true
    : isValid = false
  
  return isValid
}
