import positionToArrayOfPieces from './positionToArrayOfPieces';
import ERRORS from '../constants/errors';
import indexToXy from '../utils/indexToXy';
import xyToIndex from '../utils/xyToIndex';
import findPieceMoves from '../utils/findPieceMoves';

// Returns an array of legal square index destinations for the origin square 
const findLegalMoves = (fen, originIndex) => {
  const {
    position,
    activeColor,
    // castlingAvailability,
    // enPassantTarget,
    // fullMoveNumber,
    // halfMoveClock
  } = fen;
  let legalIndexes = [];
  let legalXYs = [];
  
  /***** check parameters *****/
  
  if (position === undefined) {
    throw new Error(ERRORS.undefinedPosition);
  }
  
  if (originIndex === undefined) {
    throw new Error(ERRORS.undefinedOriginIndex);
  }
  
  /***** END check parameters *****/

  const arrayOfPieces = positionToArrayOfPieces(position);
  const squareContent = arrayOfPieces[originIndex];
  const XY = indexToXy(originIndex);
  
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
  
  // Add legal moves for this pieces
  legalXYs = legalXYs.concat(
    findPieceMoves(squareContent, XY, fen)
  );
  
  // convert XYs into square indexes
  legalIndexes = legalXYs.map(e => xyToIndex(...e));
  
  // exludes the origin square
  legalIndexes = legalIndexes.filter(e => e !== originIndex);
  
  return legalIndexes;
}

export default findLegalMoves;
