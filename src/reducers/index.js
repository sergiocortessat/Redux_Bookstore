import { combineReducers } from 'redux';
import filter from './filter';
import BookReducer from './books';

const reducers = combineReducers({
  books: BookReducer,
  filter,
});

export default reducers;
