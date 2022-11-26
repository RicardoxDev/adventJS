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

getMinJump([2, 4, 5, 6, 8, 10]) // -> 7
getMinJump([5, 3, 6, 7, 9]) // -> 4
getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2
