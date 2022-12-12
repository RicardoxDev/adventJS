function countTime(leds) {
  leds = leds.join("").split("1")
  leds[0] += leds[leds.length-1]
  
  return Math.max(...leds.map(led => led.length)) * 7
}
