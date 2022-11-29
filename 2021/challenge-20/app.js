function pangram(letter) {
  letter = letter.toLowerCase().replaceAll("ä", "á").replaceAll("á", "a")
    .replaceAll("ë", "é").replaceAll("é", "e").replaceAll("ï", "í").replaceAll("í", "i")
    .replaceAll("ö", "ó").replaceAll("ó", "o").replaceAll("ü", "ú").replaceAll("ú", "u").split("")
  
  let filterLetters = []
  for(let i = 0; i < letter.length; i++) {
    if((letter[i].charCodeAt(0) >= 97 && 122 >= letter[i].charCodeAt(0)) || letter[i] === "ñ") {
      filterLetters.push(letter[i])
    }
  }
  
  return new Set(filterLetters).size >= 27
}
