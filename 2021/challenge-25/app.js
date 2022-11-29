function canMouseEat(direction, game) {
  let row = undefined
  let position = undefined
  let move = undefined
  
  for(let i = 0; i < game.length; i++) {
    if(game[i].includes("m")) {
      position = game[i].indexOf("m")
      row = i
    }
  }
  
  switch (direction) {
    case "up":
      if(!row) { 
        move = " "
      } else {
        move = game[row - 1][position]
      }
      break;
    case "down":
      if(!row) { 
        move = " "
      } else {
        move = game[row + 1][position]
      }
      break;
    case "right":
      move = game[row][position + 1]
      break;
    case "left":
      move = game[row][position - 1]
      break;
  }
  
  return move === "*"
}
