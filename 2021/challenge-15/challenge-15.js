function checkSledJump(heights) {
  let maxHeight = Math.max(...heights)
  let lastHeight = -1
  let isDown = false
  for(let i = 0; i < heights.length; i++) {
    if(lastHeight === heights[i]) return isDown = false
    if(!isDown && heights[i] < lastHeight) {
      isDown = true
      if(lastHeight !== maxHeight) isDown = false
    } else if(heights[i] > lastHeight) {
      isDown = false
    }
    lastHeight = heights[i]
  }
  
  return isDown
}
