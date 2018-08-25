import { SQUARE_COORDINATES } from '../constants';

const squareCoordinateToIndex = coordinate => {
  return SQUARE_COORDINATES.findIndex(e => e === coordinate);
}

export default squareCoordinateToIndex;
