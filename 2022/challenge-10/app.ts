function checkJump(heights: number[]) {
  const max = Math.max(...heights)
  
  const Up = heights.slice(0, heights.indexOf(max))
  const checkUp = Up.slice(1).every((el, idx) =>  el >= Up[idx])
  const checkUpLength = Up.length > 0
  
  const Down = heights.slice(heights.indexOf(max) + 1)
  const checkDown = Down.slice(1).every((el, idx) => el <= Down[idx])
  const checkDownLength = Down.length > 0
  
  return checkDownLength && checkUpLength && checkUp && checkDown
}
