function fitsInOneBox(boxes) {
  boxes.sort((a, b) => a.l - b.l)
  
  return boxes.slice(1).every((box, idx) => {
     return (box["l"] > boxes[idx]["l"]) &&
    (box["w"] > boxes[idx]["w"]) &&
    (box["h"] > boxes[idx]["h"])
  })
}
