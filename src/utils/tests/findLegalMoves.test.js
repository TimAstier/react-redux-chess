import findLegalMoves from '../findLegalMoves';
import ERRORS from '../../constants/errors';
import { INITIAL_STATE } from '../../redux/game';

describe('findLegalMoves', () => {
  it('returns an error if "position" is not defined', () => {
    const fen = INITIAL_STATE.toJS();
    fen.position = undefined;
    expect(() => findLegalMoves(fen)).toThrow(ERRORS.undefinedPosition);
  });
  it('returns an array', () => {
    expect(findLegalMoves(INITIAL_STATE.toJS()) instanceof Array).toEqual(true);
  });
  it('exludes the origin square', () => {
    expect(findLegalMoves(INITIAL_STATE.toJS(), 0).includes(0)).toEqual(false);
  });
});
