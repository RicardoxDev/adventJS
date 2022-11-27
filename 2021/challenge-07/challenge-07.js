function contains(store, product) {
  return JSON.stringify(store).includes(`:"${product}"`);
}
