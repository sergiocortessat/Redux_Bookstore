/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

const Book = ({ book, handleRemoveBook }) => {
  const progressBar = Math.floor(Math.random() * 100);

  return (
    <div className="book-item">
      {/* <>{book.id.substring(0, 2)}</> */}
      <div className="book-info">
        <h4>{book.category}</h4>
        <h3>{book.title}</h3>
        <h5>Author</h5>
        <div className="buttons">
          <button className="comments" type="button" disabled="true">Comments</button>
          <button className="remove" type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
          <button className="edit" type="button" disabled="true">Edit</button>
        </div>
      </div>
      <div className="progress">
        <CircularProgress variant="determinate" value={progressBar} />
        <div className="progress-text">
          <p className="percentage">
            {progressBar}
            %
          </p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="chapters">
        <h5>CURRENT CHAPTER</h5>
        <h4>Chapter17</h4>
        <button type="button" disabled="true">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

// Props
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,

};

export default Book;
