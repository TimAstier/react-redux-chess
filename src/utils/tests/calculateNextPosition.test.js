import calculateNextPosition from '../calculateNextPosition';
import { INITIAL_POSITION } from '../../constants';

describe('calculateNextPosition', () => {
  it('moves a piece from origin square to destination square', () => {
    const position = INITIAL_POSITION;
    const from = 'e2';
    const to = 'e4';
    const expectedPosition = "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR";
    expect(calculateNextPosition(position, from, to)).toEqual(expectedPosition);
  });
});
