const xyToAlgebric = (x, y) => {
  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  return `${columns[x - 1]}${y}`;
}

export default xyToAlgebric;
