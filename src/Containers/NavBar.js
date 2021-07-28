/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterBook } from '../actions';
import CategoryFilter from '../Components/CategoryFilter';

const NavBar = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [options, setOptions] = useState();

  const handleOnChange = (e) => {
    dispatch(filterBook(e.value));
  };

  useEffect(() => {
    const categories = ['All', ...books.map((book) => book.category)];
    setOptions(categories.map((category) => ({ value: category, label: category })));
  }, [books]);
  return (
    <nav>
      <CategoryFilter handleOnChange={handleOnChange} options={options} />
    </nav>
  );
};

export default NavBar;
