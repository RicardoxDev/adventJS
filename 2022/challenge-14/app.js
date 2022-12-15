function getOptimalPath(path) {
  let i = path.length - 2
  while (i >= 0) {
    path[i].forEach((_, j) => {
      path[i][j] += Math.min(path[i + 1][j], path[i + 1][j + 1]);
    });
    i--
  }

  return path[0][0];
}
