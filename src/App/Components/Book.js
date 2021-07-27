import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);

// Props
Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,

};

export default Book;
