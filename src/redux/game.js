import { Map } from 'immutable';

import { INITIAL_POSITION } from '../constants/fen';

// Types

// Reducer

const INITIAL_STATE = Map({
  fen: INITIAL_POSITION
})

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    default: return state
  }
}

// Action creators

// Selectors

const getFen = state => state.get('fen');

export const selectors = {
  getFen
};
