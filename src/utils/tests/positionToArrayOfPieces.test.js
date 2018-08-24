import positionToArrayOfPieces from '../positionToArrayOfPieces';
import {
  INITIAL_POSITION,
  INITIAL_POSITION_ARRAY_OF_PIECES,
  TEST_POSITION,
  TEST_POSITION_ARRAY_OF_PIECES
} from '../../constants';

describe('positionToArrayOfPieces', () => {
  it('works with the initial position', () => {
    const position = INITIAL_POSITION;
    const expectedArray = INITIAL_POSITION_ARRAY_OF_PIECES;
    expect(positionToArrayOfPieces(position)).toEqual(expectedArray);
  });
  it('works with the test position', () => {
    const position = TEST_POSITION;
    const expectedArray = TEST_POSITION_ARRAY_OF_PIECES;
    expect(positionToArrayOfPieces(position)).toEqual(expectedArray);
  });
});
