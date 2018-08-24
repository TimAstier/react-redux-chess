const positionToArrayOfPieces = position => {
  const arrayOfPieces = [];
  position.split('').forEach(char => {
    if (char === '/') {
      return;
    }
    if (!isNaN(char)) {
      for (let i = 0; i < parseInt(char, 10); i++) {
        arrayOfPieces.push(' ');
      }
      return;
    }
    arrayOfPieces.push(char);
  })
  return arrayOfPieces;
}

export default positionToArrayOfPieces;
