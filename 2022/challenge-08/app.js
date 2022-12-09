function checkPart(part) {
  part = part.split("");
  const reverse = (arr) => arr.reverse().join("");
  if(reverse(part) === reverse(part)) return true
  
  let isValid = false;
  let letterOld = "";
  
  part.forEach((letter, idx) => {
    letterOld = letter;
    part[idx] = "";
    
    (reverse(part) === reverse(part)) 
      ? isValid = true
      : part[idx] = letterOld
  })
  
  return isValid
}
