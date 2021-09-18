import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './Reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StoreType, ActionType, DispatchType } from './type';

const store: Store<StoreType, ActionType> & {
  dispatch: DispatchType;
} = createStore(
  combineReducers({
    ...Reducers,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
