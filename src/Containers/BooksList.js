/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../Components/Book';
import { removeBook, filterBook } from '../actions';
import CategoryFilter from '../Components/CategoryFilter';

const BooksList = () => {
  const { books } = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  const handleOnChange = (e) => {
    dispatch(filterBook(e.value));
  };
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
      <CategoryFilter handleOnChange={handleOnChange} />
    </div>
  );
};

export default BooksList;
