/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Components/Book';

const BooksList = () => {
  const { books } = useSelector((state) => state);
  const bookMapping = books.map((book) => (
    <Book key={book.id} book={book} />
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
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
