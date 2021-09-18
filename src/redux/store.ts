import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './Reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { STORE, ACTION, DISPATCH } from './type';

const store: Store<STORE, ACTION> & {
  dispatch: DISPATCH;
} = createStore(
  combineReducers({
    ...Reducers,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
