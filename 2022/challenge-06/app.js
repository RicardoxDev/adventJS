function createCube(size) {
  const repeat = (char, n) => char.repeat(n)
  let cubeUp = ""
  let cubeDown = ""
  for(let i = 1; i <= size; i++) {
    cubeUp += repeat(" ", size - i) + repeat("/\\", i) + repeat("_\\", size) + "\n"
    cubeDown += repeat(" ", i - 1) + repeat("\\/", size - i + 1) + repeat("_/", size) + "\n"
  }

  return console.log(cubeUp + cubeDown.slice(0, -1))
}
