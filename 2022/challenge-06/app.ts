function createCube(size: number) {
  const r = (char: string, n: number) => char.repeat(n)
  let cubeUp: string = "",cubeDown: string = ""
  for(let i = 1; i <= size; i++) {
    cubeUp += r(" ", size - i) + r("/\\", i)
    cubeUp += r("_\\", size) + "\n"
    
    cubeDown += r(" ", i - 1) + r("\\/", size - i + 1)
    cubeDown += r("_/", size) + "\n"
  }

  return cubeUp + cubeDown.slice(0, -1)
}
