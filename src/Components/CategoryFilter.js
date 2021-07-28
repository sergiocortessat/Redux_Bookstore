import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { filterBook } from '../actions';

const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const options = bookCategories.map((category) => ({
  value: category,
  label: category,
}));

const Selector = () => {
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    dispatch(filterBook(e.value));
  };
  return (
    <Select options={options} onChange={(e) => handleOnChange(e)} />
  );
};

export default Selector;
