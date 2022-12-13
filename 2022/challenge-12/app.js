function selectSleigh(distance, sleighs) {
  const res = sleighs.reverse().find( (sleigh) => {
    const checkConsumption = (sleigh.consumption * distance) <= 20
    return checkConsumption
  })
  return res ? res.name : null
}
