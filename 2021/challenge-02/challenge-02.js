function listGifts(letter) {
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

listGifts(carta)


