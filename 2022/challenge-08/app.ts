function checkPart(part: string) {    
  return [...part.split("")].some((_, index, array) => {
    const copy = [...array]
    copy.splice(index, 1)
    const word = copy.join("")
    const reversedWord = copy.reverse().join("")

    return word === reversedWord
  })
}
