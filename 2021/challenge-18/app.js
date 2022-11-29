function fixFiles(files) {
  let count = 0
  let renameFiles = []
  for(let i = 0; i < files.length; i++) { 
    for(let idx = i + 1; idx < files.length; idx++) {
      if(files[i] === files[idx]) {
        count++
        files[idx] += `(${count})`
      }
    }
    
    count = 0
    renameFiles.push(files[i])
  }
  
  return renameFiles
}
