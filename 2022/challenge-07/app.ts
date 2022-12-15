function getGiftsToRefill(a1: string[], a2: string[], a3: string[]) {
  const allGifts = [...new Set([...a1, ...a2, ...a3])];
  let manyHasStock = 0;
  return allGifts.filter((gift) => {
    manyHasStock = 0;
    a1.includes(gift) && (manyHasStock += 1);
    a2.includes(gift) && (manyHasStock += 1);
    a3.includes(gift) && (manyHasStock += 1);
    return manyHasStock < 2
  })
}
