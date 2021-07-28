/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr>
    <td>{book.id.substring(0, 2)}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td><button type="button" onClick={() => handleRemoveBook(book)}>Remove book </button></td>
  </tr>
);

// Props
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,

};

export default Book;
