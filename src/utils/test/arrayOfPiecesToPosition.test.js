import arrayOfPiecesToPosition from '../arrayOfPiecesToPosition';
import {
  INITIAL_POSITION,
  INITIAL_POSITION_ARRAY_OF_PIECES,
  TEST_POSITION,
  TEST_POSITION_ARRAY_OF_PIECES
} from '../../constants';

describe('arrayOfPiecesToPosition', () => {
  it('works with the initial position', () => {
    const arrayOfPieces = INITIAL_POSITION_ARRAY_OF_PIECES;
    const expectedPosition = INITIAL_POSITION;
    expect(arrayOfPiecesToPosition(arrayOfPieces)).toEqual(expectedPosition);
  });
  it('works with the test position', () => {
    const arrayOfPieces = TEST_POSITION_ARRAY_OF_PIECES;
    const expectedPosition = TEST_POSITION;
    expect(arrayOfPiecesToPosition(arrayOfPieces)).toEqual(expectedPosition);
  });
});
