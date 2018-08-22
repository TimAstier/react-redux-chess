import positionToArrayOfPieces from './positionToArrayOfPieces';

const getSquareContent = (position, index) => {
  const arrayOfPieces = positionToArrayOfPieces(position);
  return arrayOfPieces[index];
}

export default getSquareContent
