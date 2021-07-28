/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../Components/Book';
import { removeBook } from '../actions';

const BooksList = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };
  const bookMapping = books.map((book) => (
    <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
  ));

  const getFilteredBooks = ({ books, filter }) => {
    if (filter === 'All') {
      return books;
    }
    return books.filter(({ category }) => category === filter);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove book</th>
          </tr>
        </thead>
        <tbody>
          {bookMapping}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
