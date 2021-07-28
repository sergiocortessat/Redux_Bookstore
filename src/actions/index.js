import { v4 as uuidv4 } from 'uuid';

const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: {
    ...book,
    id: uuidv4(),
  },
});

export const removeBook = ({ id }) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

export const filterBook = (filter) => ({
  type: CHANGE_FILTER,
  payload: {
    filter,
  },
});
