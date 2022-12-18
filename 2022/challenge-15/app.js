"use strict"
function decorateTree(base) {
  const copy = base.split(" ").slice(0, -1)
  let result = [base.split(" ")]
  const dic = {
    "BB": "B",
    "PP": "P",
    "RR": "R",
    "BP": "R",
    "PB": "R",
    "RP": "B",
    "PR": "B",
    "RB": "P",
    "BR": "P"
  }
  
  copy.forEach((_, i) => {
    const temp = []
    console.log(result[i])
    result[i].forEach( (_, idx) => {
       temp.push(dic[result[i][idx] + result[i][idx + 1]])
    })
    result.push(temp)
  })
  
  return result.reverse().map( el => el.join(" ").trim())
}

console.time()
decorateTree('B P R P')
console.timeEnd()
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

decorateTree('B B') // ['B', 'B B']

//Bolas de colores : B
//Regalos pequeños : R
//Piñas de pino : P

//Arriba coloca  :     P     R     B     P
//Si abajo tiene :    P P   B P   R P   B R

//   R
//  P B
// R B B
//B P R P
