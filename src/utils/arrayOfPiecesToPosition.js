// NOTE: Could be made much clearer if processed row by row

const arrayOfPiecesToPosition = array => {
  let position = '';
  let emptySquares = 0;
  array.forEach((squareContent, i) => {
    if (i === array.length - 1 && emptySquares !== 0) {
      position += emptySquares + 1;
      return;
    }
    if (emptySquares !== 0) {
      if (emptySquares === 8) {
        position += emptySquares;
        position += '/';
        emptySquares = 0;
      } else if ( i % 8 === 0) {
        position += emptySquares;
      } else if (isNaN(squareContent)) {
        position += emptySquares;
      }
    }
    if (i !== 0 && i % 8 === 0 && position.slice(-1) !== '/') {
      position += '/';
      emptySquares = 0;
    }
    if (isNaN(squareContent)) {
      emptySquares = 0;
      return position += squareContent;
    }
    return emptySquares += 1;
  })
  return position;
}

export default arrayOfPiecesToPosition;
