/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../Components/Book';
import { removeBook, filterBook } from '../actions';
import CategoryFilter from '../Components/CategoryFilter';

const BooksList = () => {
  const { books } = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const [options, setOptions] = useState();

  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  const mapping = (prop) => prop.map((book) => (
    <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
  ));

  const handleOnChange = (e) => {
    dispatch(filterBook(e.value));
  };
  const getFilteredBooks = () => {
    if (filter === 'ALL') {
      return mapping(books);
    }
    return mapping(books.filter(({ category }) => category === filter.filter));
  };

  useEffect(() => {
    const categories = books.map((book) => book.category);
    setOptions(categories.map((category) => ({
      value: category,
      label: category,
    })));
  }, [books]);

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
      <CategoryFilter handleOnChange={handleOnChange} options={options} />
    </div>
  );
};

export default BooksList;
