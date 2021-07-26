import { combineReducers, createStore } from 'redux';

import BookReducer from './books';

const reducers = combineReducers({
  book: BookReducer,
});

const store = createStore(reducers);
export default store;
