/* eslint-disable no-unused-vars */
import React from 'react';
// import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux';
import { bookAction } from '../../Redux/actions/index';

const BooksList = () => {
  const { isFetching } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  console.log(isFetching);
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
        <tr>
          <td>1</td>
          <td>{isFetching}</td>
          <td>Action</td>

        </tr>
        <tr>
          <td>2</td>
          <td>The Kite Runner</td>
          <td>Mystery</td>
        </tr>
        <tr>
          <td>3</td>
          <td>The Time Machine</td>
          <td>Romance</td>
        </tr>
      </table>

      <button type="button" onClick={() => dispatch(bookAction('true', 'chingado'))}>Fetch Books</button>
    </div>
  );
};

export default BooksList;
