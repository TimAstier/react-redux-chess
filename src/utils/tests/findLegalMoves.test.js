import findLegalMoves from '../findLegalMoves';
import ERRORS from '../../constants/errors';
import { INITIAL_STATE } from '../../redux/game';

describe('findLegalMoves', () => {

  it('returns an error if "position" is not defined', () => {
    const fen = INITIAL_STATE.toJS();
    fen.position = undefined;
    expect(() => findLegalMoves(fen)).toThrow(ERRORS.undefinedPosition);
  });
  
  it('returns an error if "originIndex" is not defined', () => {
    expect(
      () => findLegalMoves(INITIAL_STATE.toJS(), undefined)
    ).toThrow(ERRORS.undefinedOriginIndex);
  });

  it('returns an array', () => {
    expect(findLegalMoves(INITIAL_STATE.toJS(), 0) instanceof Array).toEqual(true);
  });
  
  it('returns an empty array if origin square is Empty', () => {
    expect(findLegalMoves(INITIAL_STATE.toJS(), 16)).toEqual([]);
  });

  it('returns an empty array for pieces of the wrong active color', () => {
    expect(findLegalMoves(INITIAL_STATE.toJS(), 12)).toEqual([]);
    const fen = INITIAL_STATE.toJS();
    fen.activeColor = 'b';
    expect(findLegalMoves(fen, 52)).toEqual([]);
  })

  it('exludes the origin square', () => {
    expect(findLegalMoves(INITIAL_STATE.toJS(), 0).includes(0)).toEqual(false);
  });
});
