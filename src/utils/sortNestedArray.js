const sortNestedArray = array => {
  return array.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
}

export default sortNestedArray;
