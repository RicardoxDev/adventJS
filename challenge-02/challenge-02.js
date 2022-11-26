const carta = 'bici coche balón _playstation bici coche peluche'

const listGifts = (carta) => {
  const setCarta = new Set(carta.split(" "))
  let arrCarta = []
  
  let i = 0
  let count = 0
  setCarta.forEach( gift => {
    if (gift[0] === "_" || typeof gift !== 'string') {
      return
    } 
    
    while(i !== -1) {
      i = carta.indexOf(gift, i)
      if(i !== -1) {
        i++
        count++
      }
    }
    
    arrCarta.push([gift, count])
    count = 0
    i = 0
  })
  
  return  Object.fromEntries(arrCarta)
}

// Refact

listGifts(carta)

function listGiftsRefact(letter) {
 const arrLetter = letter.trim().split(/\s+/)
  let objLetter = {}
  
  let i = 0
  let count = 0
  arrLetter.forEach( gift => {
    if (gift[0] === "_" || typeof gift !== 'string') return
    if (objLetter.hasOwnProperty(gift)) count++
    count++
    
    objLetter[gift] = count
    count = 0
    i = 0
  })
  
  return  objLetter
}

listGiftsRefact(carta)


