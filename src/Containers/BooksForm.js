/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { createBook, removeBook } from '../actions';

const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const options = bookCategories.map((category) => ({
  value: category,
  label: category,
}));

const BooksForm = () => {
  const [title, setTitle] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBook({ title, category: selectedCategory }));
  };
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
