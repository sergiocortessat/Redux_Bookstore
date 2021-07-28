/* eslint-disable react/prop-types */
import Select from 'react-select';
import { options } from '../staticData';

const Selector = ({ handleOnChange }) => (
  <Select options={options} onChange={(e) => handleOnChange(e)} />
);
export default Selector;
