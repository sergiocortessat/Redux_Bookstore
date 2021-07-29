import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../Components/Book';
import { removeBook } from '../actions';

const BooksList = () => {
  const { books } = useSelector((state) => state.books);
  const filteredBooks = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  const mapping = (prop) => prop.map((book) => (
    <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
  ));

  const getFilteredBooks = () => {
    if (filteredBooks === 'ALL' || filteredBooks.filter === 'All') {
      return mapping(books);
    }
    return mapping(books.filter(({ category }) => category === filteredBooks.filter));
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
          {getFilteredBooks()}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
