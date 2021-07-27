import { combineReducers } from 'redux';

import BookReducer from './books';

const reducers = combineReducers({
  books: BookReducer,
});

export default reducers;
