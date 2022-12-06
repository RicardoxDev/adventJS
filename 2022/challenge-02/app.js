function countHours(year, holidays) {
  const solve = () => {
    let hours = 0
    holidays.forEach( day => { 
      const date = new Date(year + "/" + day).getDay()
      if(date % 6 !== 0) hours += 2
    })
  
    return hours
  }
  
  return solve()
}

