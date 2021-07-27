/* eslint-disable no-unused-vars */
import React from 'react';
import Select from 'react-select';

const Form = () => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const options = bookCategories.map((category) => ({
    value: category,
    label: category,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('e');
  };
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="title">
        Title:
        <input type="text" className="form-control" placeholder="Title" name="title" />
      </label>
      <Select options={options} />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
