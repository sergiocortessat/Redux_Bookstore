/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';
import { options } from '../staticData';

const BooksForm = () => {
  const [title, setTitle] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBook({ title, category: selectedCategory }));
    e.target.reset();
  };

  const handleSelect = (e) => {
    setSelectedCategory(e.value);
  };
  return (
    <div className="form-container">
      <h2>ADD NEW BOOK</h2>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">
          <input type="text" className="form-control book-title" placeholder="Title" name="title" onChange={(e) => setTitle(e.target.value)} />
        </label>
        <Select options={options} onChange={handleSelect} className="book-category" />
        <input type="submit" value="Add Book" className="submit-button" />
      </form>
    </div>
  );
};

export default BooksForm;
