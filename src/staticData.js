import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [
    { id: uuidv4(), title: 'The Lord of the Rings', category: 'Horror' },
    { id: uuidv4(), title: 'The Return of the King', category: 'Sci-Fi' },
  ],
};

const filterList = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const options = filterList.map((category) => ({
  value: category,
  label: category,
}));
export { initialState, options };
