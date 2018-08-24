import { combineReducers } from 'redux-immutable';
import * as duckReducers from './redux';

export default combineReducers({
  ...duckReducers,
});
