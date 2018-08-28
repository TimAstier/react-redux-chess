import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { INITIAL_POSITION } from '../constants';
import calculateNextPosition from '../utils/calculateNextPosition';
import findLegalMoves from '../utils/findLegalMoves';

// Types

export const types = {
  MOVE: 'game/MOVE'
};

// Reducer

/*
A complete chess position can be described as a string using FEN notation.
See the definition of the 6 different components of a FEN string:
https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation
*/

export const INITIAL_STATE = Map({
  position: INITIAL_POSITION,
  activeColor: 'w',
  castlingAvailability: 'KQkq',
  enPassantTarget: '-',
  halfMoveClock: 0,
  fullMoveNumber: 1
})

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.MOVE:
      return state.merge({
        position: calculateNextPosition(
          state.get('position'),
          action.payload.from,
          action.payload.to
        ),
        fullMoveNumber: state.get('fullMoveNumber') + 1
      })
    default: return state
  }
}

// Action creators

const move = (from, to) => ({
  type: types.MOVE,
  payload: { from, to }
});

export const actions = {
  move
}

// Selectors

const getPosition = state => state.get('position');
const getActiveColor = state => state.get('activeColor');
const getCastlingAvailability = state => state.get('castlingAvailability');
const getEnPassantTarget = state => state.get('enPassantTarget');
const getHalfMoveClock = state => state.get('halfMoveClock');
const getFullMoveNumber = state => state.get('fullMoveNumber');
const getFen = createSelector(
  getPosition,
  getActiveColor,
  getCastlingAvailability,
  getEnPassantTarget,
  getHalfMoveClock,
  getFullMoveNumber,
  (a, b, c, d, e, f) => {
    return `${a} ${b} ${c} ${d} ${e} ${f}`;
  }
);

const getLegalMoves = (state, props) => {
  const { index } = props;
  return findLegalMoves(state.toJS(), index);  
};

const makeGetLegalMoves = () => {
  return createSelector(
    getLegalMoves,
    legalMoves => legalMoves 
  )
}

export const selectors = {
  getPosition,
  getActiveColor,
  getCastlingAvailability,
  getEnPassantTarget,
  getHalfMoveClock,
  getFullMoveNumber,
  getFen,
  makeGetLegalMoves
};
