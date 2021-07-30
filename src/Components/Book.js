import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

const Book = ({ book, handleRemoveBook }) => {
  const progressBar = Math.floor(Math.random() * 100);
  const progressPage = Math.floor(Math.random() * 500);

  return (
    <div className="book-item">
      <div className="book-info">
        <h4>{book.category}</h4>
        <h3>{book.title}</h3>
        <h5>
          ID:
          {book.id.slice(0, 8)}
        </h5>
        <div className="buttons">
          <button className="comments" type="button" disabled="true">Comments</button>
          <span className="horizontal-line-2" />
          <button className="remove" type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
          <span className="horizontal-line-2" />
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
      <span className="horizontal-line-1" />
      <div className="chapters">
        <h5>CURRENT CHAPTER</h5>
        <h4>
          Chapter
          {' '}
          {progressPage}
        </h4>
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
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
