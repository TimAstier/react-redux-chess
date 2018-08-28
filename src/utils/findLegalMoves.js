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
  if (!position) {
    throw new Error(ERRORS.undefinedPosition);
  }

  const arrayOfPieces = positionToArrayOfPieces(position);
  
  // an empty square has no legal move
  if (arrayOfPieces[originIndex] === ' ') {
    return [];
  } 
  
  // can only move pieces with active color 
  
  // exludes the origin square
  legalMoves = legalMoves.filter(e => e !== originIndex);
  
  return legalMoves;
}

export default findLegalMoves
