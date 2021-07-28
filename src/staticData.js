import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [
    { id: uuidv4(), title: 'The Lord of the Rings', category: 'Fiction' },
    { id: uuidv4(), title: 'The Return of the King', category: 'Fiction' },
  ],
};

export default initialState;
