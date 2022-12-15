function countHours(year: number, holidays: string[]) {
  let hours = 0;
  return holidays.forEach( (day) => { 
    const date = new Date(day + "/" + year).getDay()
    const checkDate = (date % 6 !== 0);
    checkDate && (hours += 2)
  }), hours
}
