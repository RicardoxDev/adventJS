function fitsInOneBox(boxes) {
  boxes.sort((a, b) => a.l - b.l)
  let isValid = true
  let lastBox = {}
  boxes.forEach((box, idx) => {
    if(box["l"] <= lastBox["l"]) isValid = false
    if(box["w"] <= lastBox["w"]) isValid = false
    if(box["h"] <= lastBox["h"]) isValid = false
    lastBox = box
  })
  
  return isValid
}
