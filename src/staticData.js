import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [
    { id: uuidv4(), title: 'The Lord of the Rings - Return of the king', category: 'Horror' },
    { id: uuidv4(), title: 'The Lord of the Rings - The two towers', category: 'Sci-Fi' },
    { id: uuidv4(), title: 'The Lord of the Rings - The fellowship of the ring', category: 'Sci-Fi' },
    { id: uuidv4(), title: '100 years if solitude', category: 'Sci-Fi' },
    { id: uuidv4(), title: 'How to make friends and influence people', category: 'Education' },
    { id: uuidv4(), title: 'The Shining', category: 'Biography' },
  ],
};

const filterList = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const options = filterList.map((category) => ({
  value: category,
  label: category,
}));
export { initialState, options };
