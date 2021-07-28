import { v4 as uuidv4 } from 'uuid';
import initialState from '../staticData';

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return {
        ...state,
        books: [
          ...state.books,
          {
            id: uuidv4(),
            title: action.payload.title,
            category: action.payload.category,
          },
        ],
      };
    case 'REMOVE_BOOK':
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default bookReducer;
