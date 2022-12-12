function countHours(year: number, holidays: string[]) {
  let hours: number = 0;
  return holidays.forEach( (day: string) => { 
    const date: number = new Date(day + "/" + year).getDay()
    const checkDate: boolean = (date % 6 !== 0);
    checkDate && (hours += 2)
  }), hours
}
