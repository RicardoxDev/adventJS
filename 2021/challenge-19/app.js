function learn(time, courses) {
  let coursesList = [0, 0]
  let maxHours = 0
  
  for(let i = 0; i < courses.length; i++) {
    for(let idx = i + 1; idx <= courses.length; idx++) {
      if(!courses[i] || !courses[idx]) continue
      if(courses[i] + courses[idx] <= time && courses[i] + courses[idx] > maxHours) {
        maxHours = courses[i] + courses[idx]
        coursesList[0] = i
        coursesList[1] = idx
      }
    }
  }
  
  return maxHours 
    ? coursesList 
    : null
}
