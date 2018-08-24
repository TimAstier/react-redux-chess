// import { fromJS } from 'immutable';
import reducer, { INITIAL_STATE, actions, selectors } from '../game'; 

describe('game reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
  });
  
  it('updates position with MOVE actions', () => {
    const action = actions.move({ from: 'e2', to: 'e4' });
    const nextState = reducer(INITIAL_STATE.position, action);
    const expectedState =
      'rnbqkbnr/pppp1ppp/8/4p3/8/8/PPPPPPPP/RNBQKBNR';
    expect(selectors.getPosition(nextState)).toEqual(expectedState);
  });
});
