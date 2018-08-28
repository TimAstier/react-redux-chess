import positionToArrayOfPieces from './positionToArrayOfPieces';
import ERRORS from '../constants/errors';

// Returns an array of legal square index destinations for the origin square 
const findLegalMoves = (
  {
    position,
    activeColor,
    castlingAvailability,
    enPassantTarget,
    fullMoveNumber,
    halfMoveClock
  },
  originIndex
) => {

  let legalMoves = [];
  
  // check parameters
  if (position === undefined) {
    throw new Error(ERRORS.undefinedPosition);
  }
  
  if (originIndex === undefined) {
    throw new Error(ERRORS.undefinedOriginIndex);
  }

  const arrayOfPieces = positionToArrayOfPieces(position);
  const squareContent = arrayOfPieces[originIndex];
  
  // an empty square has no legal move
  if (squareContent === ' ') {
    return [];
  } 
  
  // return an empty array for pieces of the wrong active color
  if (squareContent.toUpperCase() === squareContent) {
    if (activeColor !== 'w') {
      return [];
    }
  } else {
    if (activeColor !== 'b') {
      return [];
    }
  }
  
  // TODO:
  // add candidate moves for this pieces
  legalMoves.push(1)// (test)
  
  // exludes the origin square
  legalMoves = legalMoves.filter(e => e !== originIndex);
  
  return legalMoves;
}

export default findLegalMoves
