const indexToXy = index => {
  const x = index % 8 + 1;
  const y = 8 - Math.floor(index / 8)
  return [x, y];
}

export default indexToXy;
