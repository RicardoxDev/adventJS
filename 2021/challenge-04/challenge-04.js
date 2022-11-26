const createXmasTree = (height) => {
  let tree = ""
  let treeBase = "_".repeat(height - 1) + "#" + "_".repeat(height - 1)
  for (let i = 1; i <= height; i++) {
    let spaceLength = (height - i)
    let _repeat = "_".repeat(spaceLength)
    let treeBody = i > 1 
      ? "*".repeat(i + i -1) 
      : "*".repeat(i)
    tree += _repeat + treeBody + _repeat + "\n"
  }
  tree += treeBase + "\n" + treeBase
  return tree
}

createXmasTree(5)
