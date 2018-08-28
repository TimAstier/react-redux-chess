import positionToArrayOfPieces from './positionToArrayOfPieces';
import arrayOfPiecesToPosition from './arrayOfPiecesToPosition';
import algebricToIndex from './algebricToIndex';

const calculateNextPosition = (position, algebricOrigin, algebricDestination) => {
  let fromIndex, toIndex, arrayOfPieces, movedPiece;
  
  // convert 'from' and 'to' string into array indexes
  fromIndex = algebricToIndex(algebricOrigin);
  toIndex = algebricToIndex(algebricDestination);
  
  // convert position into arrayOfPieces
  arrayOfPieces = positionToArrayOfPieces(position);
  
  // update arrayOfPieces (perform the actual move)
  movedPiece = arrayOfPieces[fromIndex];
  arrayOfPieces[fromIndex] = ' ';
  arrayOfPieces[toIndex] = movedPiece;
  
  // return the position as string
  return arrayOfPiecesToPosition(arrayOfPieces);
}

export default calculateNextPosition;
