/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <div className="book-item">
    {/* <>{book.id.substring(0, 2)}</> */}
    <div>
      <h5>{book.category}</h5>
      <h4>{book.title}</h4>
      <h5>Author</h5>
      <div>
        <button type="button" disabled="true">Comments</button>
        <button type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
        <button type="button" disabled="true">Edit</button>
      </div>
    </div>
    <div>
      more
    </div>
    <div>
      more
    </div>
  </div>
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
