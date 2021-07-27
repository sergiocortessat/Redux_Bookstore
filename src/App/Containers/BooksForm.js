/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
// import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import Select from 'react-select';

const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const options = bookCategories.map((category) => ({
  value: category,
  label: category,
}));

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('e');
};
const BooksForm = () => {
  const [title, setTitle] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="title">
        Title:
        <input type="text" className="form-control" placeholder="Title" name="title" onChange={(e) => setTitle(e.target.value)} />
      </label>
      <Select options={options} onChange={(e) => setSelectedCategory(e.value)} />
      <input type="submit" value="submit" />
    </form>
  );
};

export default BooksForm;
