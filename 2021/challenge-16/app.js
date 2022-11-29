function decodeNumbers(symbols) {
  let result = 0
  let tempNum = 0
  let lastNum = 0
  symbols = symbols.split("").map(symbol => {
    switch (symbol) {
      case ".":
        return 1
        break;
      case ",":
        return 5
        break;
      case ":":
        return 10
        break;
      case ";":
        return 50
      case "!":
        return 100
        break;
      default:
        return symbol
    }
  }).forEach( num => {
    if(typeof num !== "number") return result = NaN
    if(result === NaN) return
    if(lastNum === 0)  {
      lastNum = num
      result += num
      return
    }
    if(lastNum < num) {
      result += num - lastNum*2
    } else {
      result += num
    }
    lastNum = num
  })
  return result
}
