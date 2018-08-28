const indexToXy = index => {
  const x = (index + 1) % 8;
  const y = 8 - Math.floor((index + 1) / 8);
  return [x, y];
}

export default indexToXy;
