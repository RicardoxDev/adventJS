interface sleigh {
	name: string,
	consumption: number
}

function selectSleigh(distance: number, sleighs: sleigh[]) {
  const res = sleighs.reverse().find( (sleigh) => {
    const checkConsumption = (sleigh.consumption * distance) <= 20
    return checkConsumption
  })
  return res ? res.name : null
}
