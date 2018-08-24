// Export selectors with a slice of the state to use in components
// This avoids having to change components if selectors implementation is changed
// See https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers

import bindSelectors from '../utils/bindSelectors';

import * as fromGame from '../redux/game';

const gameSelectors = bindSelectors(
  state => state.get('game'),
  fromGame.selectors
);

const duckSelectors = {
  game: gameSelectors,
};

export default duckSelectors;
