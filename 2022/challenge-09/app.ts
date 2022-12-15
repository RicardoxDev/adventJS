function countTime(leds: number[]) {
  let sucessionsLeds = leds.join("").split("1")
  sucessionsLeds[0] += sucessionsLeds[sucessionsLeds.length-1]
  
  return Math.max(...sucessionsLeds.map(led => led.length)) * 7
}
