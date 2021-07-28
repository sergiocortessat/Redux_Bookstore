import { combineReducers } from 'redux';
import FilterReducer from './filter';
import BookReducer from './books';

const reducers = combineReducers({
  books: BookReducer,
  filter: FilterReducer,
});

export default reducers;
