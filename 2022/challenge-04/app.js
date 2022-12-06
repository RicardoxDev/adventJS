function fitsInOneBox(boxes) {
  const f = () => {
    boxes.sort((a, b) => a.l - b.l)
  	let isValid = true
  	let lastBox = {}
  	for(let i = 0; i < boxes.length; i++) {
    	if(boxes[i]["l"] <= lastBox["l"]) isValid = false
    	if(boxes[i]["w"] <= lastBox["w"]) isValid = false
    	if(boxes[i]["h"] <= lastBox["h"]) isValid = false
    	lastBox = boxes[i]
  	}
  
  	return isValid
  }
  
  return f()
}
