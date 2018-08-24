import duckSelectors from './selectors/duckSelectors';
import * as selectors from './selectors';

const rootSelectors = {
  ...duckSelectors,
  ...selectors
};

export default rootSelectors;
