function countPackages(carriers, carrierID) {
  const carrier = (id) => { return carriers.find(carrier => carrier.includes(id)) }
  let packagesNum = 0;
  
  carrier(carrierID).forEach(carry => {
    if(typeof carry === "number") packagesNum += carry
    if(carry instanceof Array) carry.forEach( car => packagesNum += countPackages(carriers ,car)) 
  })
  
  return packagesNum
}
