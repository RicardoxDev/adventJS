function contarOvejas(ovejas) {
  let ovejasRojas = ovejas
  	.filter(el => el.color === "rojo")
  
  let ovejasFinales = ovejasRojas
  	.filter(el => el.name.toLowerCase().includes("n"))
  	.filter(el => el.name.toLowerCase().includes("a"))
  
  return ovejasFinales
}
