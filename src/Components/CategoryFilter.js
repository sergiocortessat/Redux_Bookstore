import { PropTypes } from 'prop-types';
import Select from 'react-select';

const Selector = ({ handleOnChange, options }) => (
  <Select options={options} onChange={(e) => handleOnChange(e)} />
);
 
Selector.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Selector;
