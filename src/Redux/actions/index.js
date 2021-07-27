import { v4 as uuidv4 } from 'uuid';

const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: {
    ...book,
    id: uuidv4(),
  },
});
export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: {
    id: book.id,
  },
});
