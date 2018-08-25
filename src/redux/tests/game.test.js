// import { fromJS } from 'immutable';
import reducer, { INITIAL_STATE, actions, selectors } from '../game'; 

describe('game reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });
  
  it('should handle MOVE', () => {
    const action = actions.move('e2', 'e4');
    const nextState = reducer(INITIAL_STATE.position, action);
    const expectedState =
      'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR';
    expect(selectors.getPosition(nextState)).toEqual(expectedState);
  });
});
