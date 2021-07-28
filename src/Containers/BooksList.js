/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../Components/Book';
import { removeBook } from '../actions';
import Select from '../Components/CategoryFilter';

const BooksList = () => {
  const { books } = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  // const bookMapping = books.map((book) => (
  //   <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
  // ));

  const getFilteredBooks = () => {
    if (filter === 'ALL') {
      return books.map((book) => (
        <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
      ));
    }
    return books.filter(({ category }) => category === filter.filter)
      .map((book) => (
        <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
      ));
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
      <Select />
    </div>
  );
};

export default BooksList;
