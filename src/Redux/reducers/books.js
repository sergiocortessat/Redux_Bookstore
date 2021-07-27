import { v4 as uuidv4 } from 'uuid';

const defaultState = {
  books: [
    { id: uuidv4(), title: 'The Lord of the Rings', category: 'Fiction' },
    { id: uuidv4(), title: 'The Return of the King', category: 'Fiction' },
  ],
};

const bookReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case 'REMOVE_BOOK':
      return {
        ...state,
        [action.payload.id]: undefined,
      };
    default:
      return state;
  }
};

export default bookReducer;
