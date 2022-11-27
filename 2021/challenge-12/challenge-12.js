function getMinJump(obstacles) {
  obstacles = obstacles.sort((a, b) => a - b)
  let validJump = 0;
  let isValid = false;
  
  for(let i = 1; i <= 21; i++) {
    if(validJump) continue;
    
    for(let idx = 0; idx <= 21; idx += i) {
      if(obstacles.includes(idx)) isValid = false;
    }
    
    if(isValid) validJump = i;
    isValid = true;
  }
  return validJump;
}
