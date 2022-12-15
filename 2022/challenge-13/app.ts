function getFilesToBackup(lastBackup: number, changes: number[][]) {
  const filtered = changes.filter((change) => change[1] > lastBackup)
  const pending = filtered.map((change) => change[0])

  return [...new Set(pending)].sort((a, b) => a - b)
}
