function isValid(letter) {
 let booleanValid = null
 if (letter.includes("[") || letter.includes("]")) return false
 if (letter.includes("{") || letter.includes("}")) return false
 if (letter.includes("()")) return false
 if (letter.includes("(") || letter.includes(")")) {
   letter.includes("(") && letter.includes(")") && letter.indexOf("(") < letter.indexOf(")")
     ? booleanValid = true
     : booleanValid = false
 }
  
 return booleanValid
}
