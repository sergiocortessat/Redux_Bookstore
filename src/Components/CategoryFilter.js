/* eslint-disable react/prop-types */
import Select from 'react-select';

const Selector = ({ handleOnChange, options }) => (
  <Select options={options} onChange={(e) => handleOnChange(e)} />
);
export default Selector;
