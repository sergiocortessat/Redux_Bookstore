/* eslint-disable no-unused-vars */
import React from 'react';
// import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux';
// import { bookAction } from '../../Redux/actions/index';
import Book from '../Components/Book';

const BooksList = () => {
  const { books } = useSelector((state) => state.books);
  const bookMapping = books.map((book) => (
    <Book key={book.id} book={book} />
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        {bookMapping}
      </table>
    </div>
  );
};

export default BooksList;
