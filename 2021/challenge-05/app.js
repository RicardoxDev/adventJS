function daysToXmas(date) {
  let dateMiliseconds = new Date('Dec 25 2021') - new Date(date)
  let toDay = 24/60/60/1000
  let resultDays = Math.ceil(dateMiliseconds/24/60/60/1000)
  
  return resultDays
}
