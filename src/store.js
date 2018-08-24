import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export default function configureStore() {
 return createStore(
  rootReducer,
  composeWithDevTools()
 );
}
