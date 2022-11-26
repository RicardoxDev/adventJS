function groupBy(collection, it) {
  let groupIt = {}
  for(let i = 0; i < collection.length; i++) {
    if(!(typeof it !== 'string')) {
      if(!(Object.hasOwn(groupIt, collection[i][it]))) {
        groupIt[collection[i][it]] = [collection[i]]
        continue
      } else {
        groupIt[collection[i][it]].push(collection[i])
        continue
      }
    }
    if(!(Object.hasOwn(groupIt, it(collection[i])))) {
      groupIt[it(collection[i])] = [collection[i]]
      continue
    } else {
      groupIt[it(collection[i])].push(collection[i])
      continue
    }
  }
  return groupIt
}

groupBy(collection, it)
