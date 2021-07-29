import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosPerson } from 'react-icons/io';
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
    const uniqueCategories = [...new Set(categories)];
    setOptions(uniqueCategories.map((category) => ({ value: category, label: category })));
  }, [books]);
  return (
    <header>
      <div className="header-text">
        <h1 className="bookstore-cms">BookStore CMS</h1>
        <p className="books">BOOKS</p>
        <p className="categories">CATEGORIES</p>
        <CategoryFilter handleOnChange={handleOnChange} options={options} />
      </div>
      <i className="oval">
        <IoIosPerson />
      </i>
    </header>
  );
};

export default NavBar;
